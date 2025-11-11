'use strict';

const numbers = []

numbers[0] = parseInt(prompt('Give the first number: '))
numbers[1] = parseInt(prompt('Give the second number: '))
numbers[2] = parseInt(prompt('Give the third number'))
numbers[3] = parseInt(prompt('Give the fourth number: '))
numbers[4] = parseInt(prompt('Give the fifth number: '))

for (let i = numbers.length - 1; i >= 0; i--) {
    document.querySelector('#target').innerHTML += numbers[i] + '<br>';
}