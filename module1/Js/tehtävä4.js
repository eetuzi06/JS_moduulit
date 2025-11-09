'use strict';

const name = prompt('Anna nimesi: ');

const lajitteluhattu = parseInt(Math.random() * 4) + 1;

if (lajitteluhattu === 1) {
    document.querySelector('#target').innerHTML = name + ' you are a Gryffindor!'
}
else if (lajitteluhattu === 2) {
    document.querySelector('#target').innerHTML = name + ' you are a Ravenclaw!'
}
else if (lajitteluhattu === 3) {
    document.querySelector('#target').innerHTML = name + ' you are a Slytherin!'
}
else if (lajitteluhattu === 4) {
    document.querySelector('#target').innerHTML = name + ' you are a Hufflepuff!';
}
