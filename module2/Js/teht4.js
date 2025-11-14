'use strict';
const numbers = [];
let message;

do {
    message = parseInt(prompt('Give the number (0 stops): '));

    if (message !== 0) {
        numbers.push(message);
    }
} while (message !== 0);

numbers.sort((a, b) => b - a);

for (const num of numbers){
    console.log(num);
}
