// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime

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

console.log(isPrime(7))