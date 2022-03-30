"use strict";


const id = document.querySelector("#id");
const paword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

console.log(id);



loginBtn.addEventListener("click", login);


function login() {
    console.log(id.value);

    const req = {
        id : id.value,
        psword : psword.value
    };

    console.log(req);
}