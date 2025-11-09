'use strict';

const yearStr = prompt('Choose year: ')

const year = parseInt(yearStr)

let message = '';

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      message = `Year ${year} is a leap year`;
    } else {
      message = `Year ${year} is not a leap year`;
    }
  } else {
    message = `Year ${year} is a leap year`;
  }
} else {
  message = `Year ${year} is not a leap year`;
}

document.querySelector('#target').innerHTML = message;
