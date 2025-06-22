let fs = require('fs')
// function readFilePromisified(filePath) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(filePath, "utf-8", function (err, data) { // here the executer function is an anonymous function
//             if(err) {
//                 reject(err); // passing the error message further
//             }
//             else {
//                 data = data.trim().split(/[.,/?;: ]+/).join(" ");
//                 // now we will write into the file also
//                 fs.writeFile(filePath, data, "utf-8", function (err) {
//                     if(err) {
//                         reject(err) // file write unsuccessful will be passed to catch
//                     }
//                     else {
//                         resolve(data); // passing the data further
//                     }
//                 })
//             }
//         })
//     })
// }

// // In this example we will simply print the cleaned version of the file content
// function onDone(data, filePath) {
//     // the data is given by the resolve part
//     console.log(data);
    
// }

// // now we will write the reject part
// function onError(err) {
//     console.log("Error occured in file reading : " + err);
// }

// readFilePromisified("word.txt").then(onDone).catch(onError);



// -------------------------------------------------------------------------------------------------------------

function cleanFilePromisified(filepath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filepath, "utf-8", function (err1, content) {
            if(err1) {
                reject(err1);
            }
            else {
                let newData = content.split(/[!,.;'?"-/ ]+/).join(" ");
                // now writing the new data
                fs.writeFile(filepath, newData, "utf-8", function (err2) {
                    if(err2) {
                        reject(err2);
                    }
                    else {
                        // the file has been sucessfully written and the prmomise will be resolved
                        resolve(newData);
                    }
                })
            }
        })
    })
}

function onDone(value) {
    console.log("Sucessfully wrote the data: ");
    console.log("The data is: " + value);
    // the value will be passed to this function when we will write this callback function in the 
    // .then(onDone)
}

function onError(value) {
    console.log("Error while reading/writing the file: " + value);
}

cleanFilePromisified("word.txt").then(onDone).catch(onError);