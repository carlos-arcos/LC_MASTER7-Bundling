import "./site.scss";
const logo2 = require("./content/images/logo2.png");

let nombre = "Carlos Arcos";
console.log(`Práctica de parcel de ${nombre}`);

const img = document.createElement("img");
img.src = logo2;
document.getElementById("imgContainer").appendChild(img); 
