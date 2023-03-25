// Coding challenge #13: Find the maximum number in an array of numbers

//solution 1
function findMax(arr){
    let maxNum=arr[0];
    for(item of arr){
        if(item >maxNum){
            maxNum=item;
        }
    }
    return maxNum;
}

//solution 2
function findMax2(arr){
    return Math.max(...arr)
}
let array = [5, 6, -6, 5,100,-100];
console.log(findMax(array));
console.log("-------");
console.log(findMax2(array));
