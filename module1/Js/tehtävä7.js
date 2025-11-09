'use strict';

const dices = parseInt(prompt('How many dices do you want to roll?: '))

let summa = 0;

for (let i = 0; i < dices; i++) {
    const heita = Math.floor(Math.random() * 6) + 1;
    summa += heita
}
document.querySelector('#target').innerHTML = `The sum of the dice rolls is: ${summa}`
