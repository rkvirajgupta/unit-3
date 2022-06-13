document.querySelector("form").addEventListener("submit",dataSubmit);

var userData=JSON.parse(localStorage.getItem("userdatabase"))||[];
function dataSubmit(event){
     event.preventDefault();

var name=document.querySelector("#name").value;
var contact=document.querySelector("#contact").value;
var email=document.querySelector("#email").value;
var psw=document.querySelector("#pwd").value;

var user = {
         name:name,
         number:contact,
         emailId : email,
         password : psw,
     };

     userData.push(user);
     localStorage.setItem("userdatabase",JSON.stringify(userData));
     alert("Signup Successfull");
     window.location.href = "login.html";


}