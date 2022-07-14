const menu = document.getElementById("menu");
console.log(menu.childNodes);
menu.removeChild(menu.childNodes[1]);

const second = document.getElementById("second");
console.log(second.textContent);
console.log(second.previousSibling.previousSibling);
console.log(second.nextSibling.nextSibling);
