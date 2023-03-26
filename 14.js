// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

function fibonacciSeries(n){
    let num1=0;
    let num2=1;
    console.log(num1);
    console.log(num2)
    for(let i=2;i<n;i++){
        num=num1+num2;
        console.log(num);
        num1=num2;
        num2=num;
    }
}

fibonacciSeries(10);