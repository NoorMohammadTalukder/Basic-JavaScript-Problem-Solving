// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

//solution 1:
function positiveArray(arr) {
    let positiveArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positiveArr.push(arr[i]);
        }
    }
    return positiveArr;
}

//solution 2:
function positiveArray2(arr) {
    let positiveArr = [];
    for(item of arr) {
        if (item >= 0) {
            positiveArr.push(item);
        }
    }
    return positiveArr;
}

//solution 3:
function positiveArray3(arr) {
    return arr.filter(item=>item>=0);
    
}

let array = [5, 6, -6, 5, 10, -100, 10, 12];
console.log(positiveArray(array));
console.log("--------");
console.log(positiveArray2(array));
console.log("--------");
console.log(positiveArray3(array));
