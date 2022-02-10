// let factorial6th = 1;
// console.log('5!');
// for (let i = 1; i <= 5; i++) {
//     factorial6th = factorial6th *i;
// }
// console.log(factorial6th);

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var firstFactorial = getFactorial(7);
console.log('Factorial of 7 is = ', firstFactorial);

var secondFactorial = getFactorial(9);
console.log('Factorial of 9 is = ', secondFactorial);

