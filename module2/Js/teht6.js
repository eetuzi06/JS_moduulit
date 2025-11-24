'use strict';

function noppa() {
    return  Math.floor(Math.random() * 6) + 1;
}

let lista = document.querySelector("#results");
let result = 0;

while (result !== 6) {
    result = noppa();
    lista.innerHTML += "<li>" + result + "</li>";
}