import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLu4f2yxA_JdLAGZEhgUkaPK_7N5FMS0s",
  authDomain: "quizapp-45b9d.firebaseapp.com",
  projectId: "quizapp-45b9d",
  storageBucket: "quizapp-45b9d.appspot.com",
  messagingSenderId: "669546736800",
  appId: "1:669546736800:web:ef4177f0d49a9d9e932dc5",
  measurementId: "G-03KTEZF8K1"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let signin = document.getElementById("signin")
let signup = document.getElementById("signup")
let choice = document.getElementById("choice")
 signin.style.display="none"
 signup.style.display="none"
//  quizdiv.style.display="none"
//  const analytics = getAnalytics(app);

let signinchoice = document.getElementById("c2")
signinchoice.addEventListener("click", () => {
  signin.style.display = "block"
  choice.style.display = "none"
  signup.style.display = "none"


})

let signupchoice = document.getElementById("c1")
signupchoice.addEventListener("click", () => {
  signup.style.display = "block"
  choice.style.display = "none"
  signin.style.display = "none"

})


//AFTER SIGUP FUNCTION 

function aftersignup() {
  signin.style.display = "block"
  signup.style.display = "none"

}

let aftersignin=()=>{
 signin.style.display="none"
 signup.style.display="none"

}















//SIGN UP FUNCTION
let sbtn = document.getElementById("sbtn")
sbtn.addEventListener('click', () => {
  let email = document.getElementById('semail').value
  let password = document.getElementById("spass").value
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user.email)
      aftersignup()
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("hello")

    });
})














//SIGN IN FUNCTION
let lbtn = document.getElementById("lbtn")
lbtn.addEventListener("click", () => {
  let email = document.getElementById("lemail").value
  let password = document.getElementById("lpass").value
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Login Successfully")
      aftersignin()
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})



