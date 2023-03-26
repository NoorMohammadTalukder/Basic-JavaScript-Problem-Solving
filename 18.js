// Coding challenge #18: Print the first 100 prime numbers
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

function printPrimes(n){
    let number=2;
    let i=1;
    while(i<=n){
        if(isPrime(number)){
            console.log(i+" => "+number);
            i++;
        }
        number++;
        
    }
}

printPrimes(5)