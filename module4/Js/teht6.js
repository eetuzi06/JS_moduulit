'use strict';

async function vitsi() {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const jsonData = await response.json();
        console.log(jsonData.value);
    } catch (error) {
        console.log("Error", error);
    }
}

vitsi();

const form = document.querySelector("form");

form.addEventListener("submit", async function(evt) {
    evt.preventDefault();

    const haku = document.querySelector("#query").value;

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${haku}`);
        const data = await response.json();

        data.result.forEach(joke => {
            const article = document.createElement("article");
            const p = document.createElement("p");

            p.textContent = joke.value;
            article.appendChild(p);
            document.body.appendChild(article);
        });

    } catch (error) {
        console.log("Error", error);
    }
});