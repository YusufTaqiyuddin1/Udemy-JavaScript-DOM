// NodeList
// const list = document.querySelectorAll("li");
// console.log(list);

// const list1 = document.getElementById("menu1").childNodes;
// console.log(list1);

// const list2 = document.getElementById("menu1").childNodes;
// console.log(list2);


// NodeList Live
// const menu = document.getElementById("menu");
// const list = menu.childNodes;

// menu.append(document.createElement("li"));
// menu.append(document.createElement("li"));

// console.log(list);


// NodeList Static
const list = document.querySelectorAll("li");
const menu = document.getElementById("menu");

menu.append(document.createElement("li"));
menu.append(document.createElement("li"));

console.log(list);

