// Coding challenge #22: Reverse an array

function reverseArray(arr) {
    let iterate = arr.length
    let reverseArr = [];
    for (let i = 0; i < iterate; i++) {
        let ele = arr.pop();
        reverseArr.push(ele);
    }
    return reverseArr;
}

console.log(reverseArray([1, 2, 3]));