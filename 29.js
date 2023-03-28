// Coding challenge #29: Print the distance between the first 100 prime numbers
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
function CalculateDistance(n){
    let element=2;
    let foundPrime=0;
    let i=3;
    while(foundPrime<n){
        if(isPrime(i)){
            let distance=i-element;
            console.log(distance);
            element=i;
            foundPrime++;
        }
        i++;
    }
}
CalculateDistance(10);