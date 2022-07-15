// innerHTML
const content = document.getElementById("content");
//content.innerHTML = "<h1>This is Title</h1><p>This is Description</p>";

// Window 
const locationParagraph = document.getElementById("location");
const height = window.screen.height;
const width = window.screen.width;
const url = window.location;

content.textContent = `Window width: ${width}px, height: ${height}px`;
locationParagraph.textContent = url;