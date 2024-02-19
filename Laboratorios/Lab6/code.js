var input = document.getElementById("password");
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("boton").click();
    }
  });
  


function checkPassword(){
    let password = document.getElementById("password").value; 
    let img = document.getElementById("image");
    let points = 0;
        if (password.length >= 6) { 
            let arrayTest =  
                [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/]; 
            arrayTest.forEach((item) => { 
                if (item.test(password)) { 
                    points +=1;
                }
            }); 
        }
        

        if(points >= 3){
            var x = document.getElementById("yipee"); 
            img.src = "img/thumbsUp.png"
            let texto = document.getElementById("quality")
            texto.innerHTML = "Tu contraseña es segura";
            x.play();
       

        }
            else {
                img.src ="img/thumbsDown.png" 
                var x = document.getElementById("yoda"); 
                let texto = document.getElementById("quality")
                texto.innerHTML = "Tu contraseña es insegura";
                x.play();
        } 
}