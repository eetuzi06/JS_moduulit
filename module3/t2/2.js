'use strict';

const muokkaa = document.getElementById("target");

const i = ["First item", "Second item", "Third item"];

i.forEach((text, index) => {
    const li = document.createElement("li");
    li.textContent = text;

    if (index === 1) {
        li.classList.add("my-item");
    }
    muokkaa.appendChild(li);

});
