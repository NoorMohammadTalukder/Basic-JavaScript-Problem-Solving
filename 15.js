// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

function fibonacciSeries(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }

    return fibonacciSeries(n-1)+fibonacciSeries(n-2)
}

console.log(fibonacciSeries(10));
