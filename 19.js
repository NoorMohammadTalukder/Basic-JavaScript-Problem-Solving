// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    if (number === 2) {
        return true;
    }

    maxDivisor = Math.sqrt(number);

    for (i = 2; i <= maxDivisor; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}


function nPrimes(n,startAt){
    let array=[];
    let number=startAt;
    let i=1;
    while(i<=n){
        if(isPrime(number)){
            array.push(number)
            i++;
        }
        number++;
        
    }
    return array;
}

console.log(nPrimes(5,2))