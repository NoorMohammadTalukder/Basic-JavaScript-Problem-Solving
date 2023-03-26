// Coding challenge #17: Calculate the sum of digits of a positive integer number

function sumOfDigits(digits){
    var sum=0;
    var numberString=digits.toString();

    for(item of numberString){
        sum=sum+parseInt(item);
    }
    return sum;
}

console.log(sumOfDigits(12345));