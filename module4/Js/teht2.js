'use strict';

document.addEventListener('submit', async function(evt) {

    evt.preventDefault();

    const data = document.querySelector('input[name=q]').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${data}`);
        if (!response.ok) throw new Error('Invalid input');

        const json = await response.json();
        console.log('Result', json);
    }  catch(error) {
        console.log(error.message);
    }
});