'use strict';

const target = document.getElementById("target");

target.addEventListener("mouseover", function(evt){
    target.src = "img/picB.jpg";
});

target.addEventListener("mouseout", function(evt){
    target.src = "img/picA.jpg";
});
