'use strict';

document.addEventListener('submit', async function(evt) {

    evt.preventDefault();

    const data = document.querySelector('input[name=q]').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${data}`);
        if (!response.ok) throw new Error('Invalid input');

        const json = await response.json();
        console.log('Result', json);
        const resultsdiv = document.getElementById('results');
        resultsdiv.innerHTML = '';

        json.forEach(item => {
            const article =document.createElement("article");
            const show = item.show;
            const h2 = document.createElement("h2");
            h2.textContent = show.name;
            article.appendChild(h2);

            const url = document.createElement("a");
            url.href = show.url;
            url.target = '_blank';
            article.appendChild(url);

            if (show.image?.medium) {
                const image = document.createElement("img");
                image.src = show.image.medium;
                image.alt = show.name;
                article.appendChild(image);
            }

            const summary = document.createElement("div");
            summary.innerHTML = show.summary;
            article.appendChild(summary);

            resultsdiv.appendChild(article);


        });
    } catch(error) {
        console.log(error.message);
    }
});