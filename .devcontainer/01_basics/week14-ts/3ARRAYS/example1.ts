function maxElement(arr: number[]): number {
    let max: number = 0;
    for(let i: number = 0; i < arr.length; i++) {
        if(arr[i]! > max) max = arr[i]!
    }
    return max;
}

console.log(maxElement([1,2,4,8,2,3]));


// to not throw the error use
// 1. for each loop so that, it ensures that the value exists
// 2. use ! that guarantees that the value exist