// this means: the function "delayedCall" takes an argument which is a function that furhter takes 0 arg and gives no o/p
function delayedCall(fn) {
    setTimeout(fn, 5000);
}
// calling the function
delayedCall(() => {
    console.log("Hello world after 5 seconds");
    return;
});
export {};
// let a: number = 100 // used checkfor the ES version if string interpolation is used then the ES2020 is used else ES5
// console.log(`H+ello ${a}`);
// $ npx tsc -b
// $ node delayedCall.js
//# sourceMappingURL=delayedCall.js.map