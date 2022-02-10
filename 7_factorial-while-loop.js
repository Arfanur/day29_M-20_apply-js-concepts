// function getFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     while(i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);





// function getFactorial(number) {
//     let factorial = 1;
//     let i = number;
//     while(i >= 1) {
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }

// const yourFactorial = getFactorial(number);
// console.log('your factorial is = ', yourFactorial);






// for loop reverse

function getFactorial2(number) {
    let factorial = 1;
    for (i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

const hersFactorial = getFactorial2(6);
console.log('hers factorial is = ', hersFactorial);