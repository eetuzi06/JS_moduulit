'use strict';

const shouldi = confirm('Should I calculate the square root?');
let message;

if (shouldi === true) {
    const number = prompt('Give me a number: ');
    const numero = parseInt(number);

    if (numero < 0) {
        message = 'The square root of a negative number is not defined.';
    } else {
        message = `The square root of number ${numero} is ${Math.sqrt(numero)}.`;
    }
} else {
    message = 'The square root is not calculated.';
}

document.querySelector('#target').innerHTML = message


