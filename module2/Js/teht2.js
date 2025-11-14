'use strict';
function funktio() {
    const lista = [];
    const participants = parseInt(prompt('Number of participants:'));

    for (let i = 0; i < participants; i++) {
        lista.push(prompt('Give the name of the participant:'));
      }

      lista.sort();
      document.getElementById('target').innerHTML = lista.join('<br>');
    }

    funktio();