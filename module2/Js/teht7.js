'use strict';

const max = parseInt(prompt('What is the max number for the dice?'));

function noppa(max) {
    return  Math.floor(Math.random() * max) + 1;
}

let lista = document.querySelector("#results");
let result = 0;

while (result !== max) {
    result = noppa(max);
    lista.innerHTML += "<li>" + result + "</li>";
}