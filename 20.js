// Coding challenge #20: Rotate an array to the left 1 position

function rotateLeft(arr){
    let firstElement=arr.shift();
    arr.push(firstElement);
    return arr;
}

console.log(rotateLeft([1,2,3]));