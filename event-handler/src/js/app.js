// Event Listener
// const clickMe = document.getElementById("clickMe");
// clickMe.addEventListener("click", function(){
//     clickMe.setAttribute("value", "You Clicked Me!");
// });

// Global Event Handler
const button = document.getElementById("clickMe");

button.onclick = function(){
    button.setAttribute("value", "You Clicked Me!");
};

// Event
const canvas = document.getElementById("canvas");
const text = document.getElementById("text");

canvas.onclick = function(event){
    text.textContent = `You Click at (${event.x}), ${event.y}`;
}