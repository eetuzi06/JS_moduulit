'use strict';
const dogs = []

for (let i = 0; i < 6; i++) {
    dogs.push(prompt(`Give the name of dog ${i + 1}:`));
}

dogs.sort().reverse();

document.querySelector('#dogs').innerHTML = dogs.join('<br>')