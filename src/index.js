import React from "react";
// console.log(React);
import ReactDOM from "react-dom";
//console.log(ReactDOM);
import App from "./components/App"; 

const result = ReactDOM.createRoot(document.getElementById("root"));
result.render("Hello World!");


var username = "Ankita";
var age = "24";

result.render(
    <ul>
        <li>{username}</li>
        <li>{age}</li>
    </ul>
)
result.render(<App />);