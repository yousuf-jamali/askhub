import {auth, createUserWithEmailAndPassword} from "./firebase.js";

const submit=()=> {
    const email=document.getElementById("email");
    const password=document.getElementById("password");
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      
      const user = userCredential.user;
    
      console.log("user-->",user);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      console.log("error-->",errorMessage);
    });
  }
  var btn=document.getElementById("submitBtn");
  btn.addEventListener("click",submit);

  function checkEmail() {
    var x=document.getElementById("email");
    for (var i=0; i<x.value.length; i++) {
      if (x.value[i]!=="@" || x.value[i]!==".") {
        alert("please enter valid email");
      }
    }
  }
  btn.addEventListener("click",checkEmail);