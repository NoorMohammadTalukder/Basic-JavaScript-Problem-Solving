// Coding challenge #10: Calculate the sum of numbers in an array of numbers

function sumArray(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

let array = [5, 6, 7, 5];
let summmation = sumArray(array);
console.log(summmation);