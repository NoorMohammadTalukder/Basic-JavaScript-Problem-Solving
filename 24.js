// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array

function mergeArray(arr1, arr2) {
    let iterate = arr2.length;
    for (let i = 0; i < iterate; i++) {
        let element = arr2.shift();
        arr1.push(element);
    }
    return arr1;
}

console.log(mergeArray([1,2,3],[4,5,6]));