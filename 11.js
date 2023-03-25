// Coding challenge #11: Calculate the average of the numbers in an array of numbers
function avgOfArray(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum/arr.length;
}

let array = [5, 6, 6, 5];
let avg = avgOfArray(array);
console.log(avg);