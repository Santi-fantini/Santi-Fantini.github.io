/*document.addEventListener("DOMContentLoaded", function() {
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
});*/

const mail = document.getElementById("mail");
const cel = document.getElementById("phone");
const nombre = document.getElementById("name");
const pass = document.getElementById("password");
const form = document.getElementById("formRegister");
const parrafo = document.getElementById("avisoVerificacion");

form.addEventListener("submit", e => {
    e.preventDefault();
    let avisoVerificacion = "";
    let login = false;
    const mailVerificacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const celVerificacion = /^\d+$/;
    parrafo.innerHTML = "";

    if (!mailVerificacion.test(mail.value)) {
        avisoVerificacion += '*El mail no es válido <br>';
        login = true;
    }

    if (!celVerificacion.test(cel.value)) {
        avisoVerificacion += '*El número telefónico no es válido <br>';
        login = true;
    }

    if (nombre.value.length < 7) {
        avisoVerificacion += '*El nombre no es válido <br>';
        login = true;
    }

    if (pass.value.length < 8) {
        avisoVerificacion += '*La contraseña no es válida';
        login = true;
    }

    if (login) {
        parrafo.innerHTML = avisoVerificacion;
    } else {
        parrafo.innerHTML = "CUENTA REGISTRADA CORRECTAMENTE";
    }
});