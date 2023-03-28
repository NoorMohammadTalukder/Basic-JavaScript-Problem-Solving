// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

function distinctArray(arr){
    let distinctArr=[];

    for(item of arr){
        if(distinctArr.includes(item)){
            continue;
        }else{
            distinctArr.push(item)
        }
    }
    return distinctArr;
}
console.log(distinctArray([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]))
