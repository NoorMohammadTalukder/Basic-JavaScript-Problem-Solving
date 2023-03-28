// Coding challenge #28: Calculate the sum of first 100 prime numbers

function isPrime(num){
    if(num<2){
        return false;
    }
    if (num==2){
        return true;
    }
    let maxDivisor=Math.sqrt(num);
    for(let i=2;i<=maxDivisor;i++){
        if(num%i==0){
            return false;
        }
       
    }
    return true;
}

function sumPrime(n){
    let foundPrime=0;
    let sum=0;
    let i=2;
    while(foundPrime<n){
        if(isPrime(i)){
            sum+=i;
            foundPrime++;
        }
        i++
    }
    return sum;
}


console.log(sumPrime(10));

