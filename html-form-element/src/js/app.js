// HTML Form ELement 
// document.querySelector("form[name=commentForm]").onsubmit = function(event){
//     const comment = document.getElementById("comment").value;
//     const form = document.getElementById("from").value;

//     const commentList = document.getElementById("commentList");
//     const commentItem = document.createElement("p");
//     commentItem.textContent = `${comment} - ${form}`;
//     commentList.appendChild(commentItem);

//     document.forms['commentForm'].reset();

//     event.preventDefault();
// }

// HTML Form Element
document.forms['commentForm'].onsubmit = function(event){
    const comment = document.forms['commentForm']['comment'].value;
    const from = document.forms['commentForm']['from'].value;

    const commentList = document.getElementById("commentList");
    const commentItem = document.createElement("p");
    commentItem.textContent = `${comment} - ${from}`;
    commentList.appendChild(commentItem);

    document.forms['commentForm'].reset();

    event.preventDefault();
}

// HTML Table Element
const table = document.getElementById("orderRevenue");
console.log(table.caption);
console.log(table.tHead);
console.log(table.tBodies);
console.log(table.tFoot);