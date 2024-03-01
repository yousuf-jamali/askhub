import {auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "./firebase.js";

const login=()=> {
    const email=document.getElementById("email");
    const password=document.getElementById("password");
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      
      const user = userCredential.user;
      window.location="index.html"
    
      console.log("user-->",user);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      console.log("error-->",errorMessage);
    });
  }
  var btn1=document.getElementById("loginBtn");
  btn1.addEventListener("click",login);

var loginWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    const user = result.user;
    console.log("user-->", user );
   
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
  
    const email = error.customData.email;
    
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.log("error==>",errorMessage);
    
  });
} 


var b3=document.getElementById("loginGoogle");
b3.addEventListener("click",loginWithGoogle);