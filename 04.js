//Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

function printMultoplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        if (i === 1) {
            console.log("multiplication tables of " + num);
        }
        let result = num + " X " + i + " = " + num * i;
        console.log(result);
        if (i === 10) {
            console.log("----------");
        }
    }
}
for (let i = 1; i <= 10; i++) {
    printMultoplicationTable(i);
}
