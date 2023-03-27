// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function mergedExclusive(arr1,arr2){
    let arr=[];

    for(let i=0;i<arr1.length;i++){

        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                arr1[i]=null;
                arr2[j]=null;
            }
        }
    }
    let filteredArr1=arr1.filter(element=>element!=null);
    let filteredArr2=arr2.filter(element=>element!=null);
    return filteredArr1.concat(filteredArr2);
}

console.log(mergedExclusive([1,2,3,4],[2,3,5]));