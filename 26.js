// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

function mergeLeft(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr1.length;j++){
            if(arr1[i]==arr2[j]){
                arr1[i]=null;
            }
        }
    }
    let filteredArr=arr1.filter(ele=>ele!=null);
    return filteredArr;
}

console.log(mergeLeft([1, 2, 3, 4], [2, 3, 5]));
