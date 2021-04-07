const lihat = document.getElementById("lihat");
const password = document.getElementById("password");
    lihat.addEventListener("click",function() {
        password.type= "text";
    });
    lihat.addEventListener("dblclick",function(){
        password.type= "password";
    });
