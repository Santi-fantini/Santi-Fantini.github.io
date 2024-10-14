document.addEventListener("DOMContentLoaded", function (){
    const form = document.querySelector("#form--login form");
    const usernameInput = form.querySelector("input[placeholder='Usuario (5 caracteres minimo)']");
    const passwordInput = form.querySelector("input[placeholder='Contraseña (recuerde que son 8 caracteres)']");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        let errorMessage = "";
 
        if(usernameInput.ariaValueMax.length < 5) {
            idValid = false;
            errorMessage += "El nombre de usuario debe tener al menos 5 caracteres.\n";
        }

        if (passwordInput.ariaValueMax.length < 8) {
            idValid = false;
            errorMessage += "La contraseña debe tener al menos 8 caracteres.\n";
        }

        if (!isValid){
            alert(errorMessage);
            event.preventDefault();
        }
   });
});