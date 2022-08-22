let copy = document.getElementById('nombre').style;
function validateName(nombre) {
    let arrayName = nombre.split(" ");
    if (arrayName.length <= 2) {
        return false;
    }
    for (var i = 0; i < arrayName.length; i++) {
        let palabra = arrayName[i];
        if (palabra.charCodeAt(0) < 65 || palabra.charCodeAt(0) > 90 || palabra.length <= 1) {
            return false;
        }
    }
    return true;
}

function validateEmail(email) {
    return email.match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
}



function validarNombre(){
    document.getElementById('nombre').style.backgroundColor = 'rgb(228, 228, 228)';
    const nombre = document.getElementById('nombre').value;
    console.log(nombre);
    if(!validateName(nombre)) {
        document.getElementById('nombre').style.backgroundColor = 'red';
        return false;
    }
    return true;
}

function validarCedula(){
    document.getElementById('cedula').style.backgroundColor = 'rgb(228, 228, 228)';
    const cedula = document.getElementById('cedula').value;
    if (cedula <= 1000000000) {
        document.getElementById('cedula').style.backgroundColor = 'red';
        return false;
    }
    return true;
}

function validarEmail(){
    console.log('***********'+validateEmail('bibonilla@misena.edu.co'));
    document.getElementById('email').style.backgroundColor = 'rgb(228, 228, 228)';
    var email = document.getElementById('email').value;
    console.log(email);
    let blemail = validateEmail(email);
    console.log(blemail);
    if (!blemail) {
        document.getElementById('email').style.backgroundColor = 'red';
        return false;
    }
    return true;
}

function validarTelefono(){
    document.getElementById('telefono').style.backgroundColor = 'rgb(228, 228, 228)';
    const telefono = document.getElementById('telefono').value;
    if (telefono.toString().charCodeAt(0) != 51 || telefono.toString().length != 10) {
        document.getElementById('telefono').style.backgroundColor = 'red';
        return false;
    }
    return true;
}

function procesar() {
    if(!validarNombre() || !validarCedula() || !validarEmail() || !validarTelefono()) {
        alert('Debes ajustar la información solicitada en el formulario antes de procesar.');
        return;
    }
    fetch('http://api.mathjs.org/v4/', {
            method: 'POST',
            body: JSON.stringify({
                expr: [
                  "a = 1.2 * (2 + 4.5)",
                  "a / 2",
                  "5.08 cm in inch",
                  "sin(45 deg) ^ 2",
                  "9 / 3 + 2i",
                  "b = [-1, 2; 3, 1]",
                  "det(b)"
                ],
                precision: 2
            }),
            headers: {
                "Content-type": "application/json"
            }})
      .then(response => response.json())
      .then(json => console.log(json));
      alert('Ejecuado correctamente.');
}