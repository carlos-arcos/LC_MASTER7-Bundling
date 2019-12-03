import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "./reactComponent";
const imgLogo2 = require("./content/images/logo2.png");

ReactDOM.render(
    <div>
        <h1><ReactComponent /></h1>
    </div>,
    document.getElementById("root")
);

const img = document.createElement("img");
img.src = imgLogo2;
document.getElementById("imgContainer").appendChild(img);

//ES6
const averageScore = "90";
const messageToDisplay = `avegage score: ${averageScore}`;
console.log(messageToDisplay);

