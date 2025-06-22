// doubling each element of an array using the map function

import { arrayBuffer } from "stream/consumers";

let input = [1,2,4,3,5];

function transform(i) {
    return i * 2;
}

let new_array = input.map(transform);
console.log(new_array); // here we called the transform function on the input array by passing the transform function


// create a map function using two arguments array and the transform fn.
// such that the array is modified not a new array is created

function customMap(array, transform) {
    for(let i = 0; i < array.length; i++) {
        array[i] = 2 * array[i];
    }
}

customMap(input, transform);
console.log(input);
