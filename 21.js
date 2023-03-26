// Coding challenge #21: Rotate an array to the right 1 position

function rotateRight(arr){
    var lastElement=arr.pop();
    arr.unshift(lastElement);
    return arr;
}

console.log(rotateRight([1,2,3]));