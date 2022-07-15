// Node Type
const nodes = document.body.childNodes;
nodes.forEach(node => {
    console.log(`${node} : ${node.nodeType}`);
})

// HTML element
const link = document.getElementById("link");
link.href = "https://www.google.com";
link.target = "_blank";
link.textContent = "Google";