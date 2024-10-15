 /*// VALIDACION DE CAMPO NOMBRE

function validar() {
    let name = document.getElementById('nombre').value;

    let text;
    if (name === '') {
        text = "Debe rellenar el campo de nombre";
    } else {
        text = " "
    }
    document.getElementById('messages').innerHTML = text;
}


// VALIDACION DE CAMPO EMAIL

function validarE() {
    let mail = document.getElementById('email').value;

    let text;
    if (mail === '') {
        text = "Debe rellenar el campo de Email";
    } else {
        text = " "
    }
    document.getElementById('messagesE').innerHTML = text;
}

// VALIDACION DE CAMPO TELEFONO

function validarT() {
    let phoneNumber = document.getElementById('phone').value;

    let text;
    if (phoneNumber === '') {
        text = "Debe rellenar el campo de Telefono";

     // Validar que solo contenga números
    }else if (!/^\d+$/.test(phoneNumber)) {
        text = "Solo se permiten números en el campo de Teléfono";
    } else {
        text = " ";
    }
    document.getElementById('messagesT').innerHTML = text;
}

// VALIDACION DE CAMPO MENSAJE

function validarM() {
    let mensaje = document.getElementById('message').value;

    let text;
    if (mensaje === '') {
        text = "Debe rellenar el campo de Mensaje con al menos 50 caracteres";
    } else {
        text = " "
    }
    document.getElementById('messagesM').innerHTML = text;
}  */

const name = document.getElementById("nombre")
const mail = document.getElementById("email")
const cel = document.getElementById("phone")
const form = document.getElementById("contactForm")
const parrafo = document.getElementById("avisoVerificacion")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let avisoVerificacion = "";
    let login = false;
    let mailVerificacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let celVerificacion = /^\d+$/
    parrafo.innerHTML = ""
    if(name.value.length < 7){
        avisoVerificacion += '*El nombre no es valido <br>'
        login = true;
    }
    if(!mailVerificacion.test(email.value)) {
        avisoVerificacion += '*El mail no es valido <br>'
        login = true;
    }
    if (!celVerificacion.test(cel.value)) {
        avisoVerificacion += '*El numero telefonico no es valido <br>';
        login = true;
    }

    if(login){
        parrafo.innerHTML = avisoVerificacion
    } else {
        parrafo.innerHTML = "MENSAJE ENVIADO CORRECTAMENTE"
    }
})
