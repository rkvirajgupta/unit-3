document.querySelector("form").addEventListener("submit",login);


  var userData=JSON.parse(localStorage.getItem("userdatabase"))||[];

  function login(event){
    event.preventDefault();
     var email=document.querySelector("#email").value;
     var psw=document.querySelector("#pwd").value;

     for(let i=0;i<userData.length;i++){

      if(userData[i].emailId==email&&userData[i].password==psw){

        alert("Login Successfull");
        window.location.href="index.html";
        break;
      }else if(i==userData.length-1){
        alert("Invalid Credentials");

      }


     }

  }