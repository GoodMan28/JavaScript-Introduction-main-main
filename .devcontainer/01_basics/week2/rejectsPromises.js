const fs = require("fs");
// Here we will be seeing the promisified verision of readFile 
function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function onDone(value) {
  console.log("The content in the file is : " + value);
}

function onError(errMess) {
  console.log("Error is " + errMess); // this message is given by the reject function
}

readFilePromisified("word.txt").then(onDone).catch(onError);
