const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

/* Shittt!! when I used document.getElementsByClassName for the container why I am getting a error?? Do you know, y?? */

open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));
