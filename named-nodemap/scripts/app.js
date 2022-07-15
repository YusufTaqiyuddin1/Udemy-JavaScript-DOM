// NamedNodeMap

const logo = document.getElementById("logo");
const atributes = logo.attributes;

for(let attribute of atributes){
    console.log(`${attribute.name} : ${attribute.value}`);
}