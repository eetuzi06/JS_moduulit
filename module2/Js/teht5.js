'use strict';

let numbers = [];

while (true) {
  let joo = prompt("Enter a number:");
  let n = Number(joo);

  if (numbers.includes(n)) {
    alert("The number has already been given!");
    break;
  }

  numbers.push(n);
}

numbers.sort((a, b) => a - b);
console.log(numbers);
