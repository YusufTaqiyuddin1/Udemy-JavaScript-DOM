
const title = document.getElementById("title");
title.textContent = "Ini adalah Title";

const description = document.getElementById("description");
description.innerHTML = "Ini adalah deskripsi";

const content = document.getElementById("content");

console.log(content.id); // content
console.log(content.className); // content
console.log(content.tagName); //DIV

// Element Method

const methodTitle = document.getElementById("methodH1");
methodTitle.textContent = "Element Method";

const methodP = document.getElementById("methodP");
methodP.textContent = "Element Method";

methodTitle.remove(); // menghapus methodP

// createElement

const judul = document.getElementById("createElement");
const textJudul = document.createElement("h1");

textJudul.textContent = "Membuat Element";
judul.appendChild(textJudul);