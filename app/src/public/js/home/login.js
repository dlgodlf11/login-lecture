"use strict";


const id = document.querySelector("#id");
const paword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

console.log(id);



loginBtn.addEventListener("click", login);


function login() {

    const req = {
        id : id.value,
        psword : psword.value
    };
    fetch("/login", {
        method : "POST",
        headers : {
            "Content-Type":"application/json",
        },
        body : JSON.stringify(req)
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            location.href = "/";
        }
        else{
            alert("실패");
        }
    }).catch((err)=>{
        console.log(new Error("에러"));
    })

}