function random(resolve) {
    setTimeout(function anonymous () {
        resolve("The resolve is fulfilled after 3 seconds")
    }, 3000);
}

let p = new Promise(random);

// Here the resolve function will return a value i.e. a message after 3 seconds and we will pass the
// data to the main function.(How the data is passed to the function called in then refer the comment)
function main(data) {
    console.log("The message after completing the resolve is: " + data);
}
p.then(main); // main will be called whenever the promise is fulfilled

// And when will the promise get fulfilled:
// It will be fulfilled when: the first arg of the argument of the Promise class is called 
// which is here called after 3 sec. (resolve function is called after 3 sec)



// ------------------------------------------------------------------------------------------------------
// data to the main function.(How the data is passed to the function called in then refer the comment)

// p.then(function(value) {
//     main2(value);
// });