document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#form--login form");
    const emailInput = form.querySelector("input[placeholder='Correo Electronico.']");
    const telefonoInput = form.querySelector("input[placeholder='Num Telefono (maximo 10 caracteres)']");
    const usernameInput = form.querySelector("input[placeholder='Usuario (5 caracteres minimo.)']");
    const passwordInput = form.querySelector("input[placeholder='Contraseña (7 caracteres minimo.)']");
    const repetirpasswordInput = form.querySelector("input[placeholder='Repetir contraseña.']");
    form.addEventListener("submit", function (event) {
        let isValid = true;
        let errorMessage = "";

        //correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            errorMessage += "El correo electrónico no es válido.\n";
        }

        //número de teléfono
        if (telefonoInput.value.length > 10) {
            isValid = false;
            errorMessage += "El número de teléfono no puede tener más de 10 caracteres.\n";
        }

        //nombre de usuario
        if (usernameInput.value.length < 5) {
            isValid = false;
            errorMessage += "El nombre de usuario debe tener al menos 5 caracteres.\n";
        }

        //contraseña
        if (passwordInput.value.length < 7) {
            isValid = false;
            errorMessage += "La contraseña debe tener al menos 7 caracteres.\n";
        }

        //repetir constraseña
        if (passwordInput.value !== repetirpasswordInput.value) {
            isValid = false;
            errorMessage += "Las contraseñas no coinciden.\n";
        }

        // Mostrar errores y prevenir el envío del formulario si no es válido
        if (!isValid) {
            alert(errorMessage);
            event.preventDefault();
        }
    });
});