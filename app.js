function visible () {
  var x = document.getElementById("password");
if (x.type === "password") {
  x.type = "text";
} else {
  x.type = "password";
}
}
var a=document.getElementById("a1");
a.addEventListener("click",visible);


import {auth, onAuthStateChanged, signOut} from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
   console.log("user-->",user);
  } else {
  console.log("not login");
  }
});

var logOut = () => {
  signOut(auth).then(() => {
   console.log("signout successfull");
   window.location.href="login.html";
  }).catch((error) => {
    console.log("error-->",error);
  });
}

var b = document.getElementById("out");
b.addEventListener("click",logOut);



