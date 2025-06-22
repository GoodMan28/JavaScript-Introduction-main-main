// here just like maps we will pass just the filtering logic as the following example:
// let ans = input.filter(filteringLogic);

let input = [1,2,4,3,5];

let ans = input.filter((i) => {
    if(i % 2 == 0) return true;
    return false;
})
// we can pass the logic as an anonymous function

console.log(ans);