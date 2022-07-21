//variables registro//
let nombreValidado = false;
let inputNombre = document.querySelector("#nombre-form");
let inputContraseña = document.querySelector("#contraseña-form");
let inputReContraseña = document.querySelector("#recontraseña-form");
let form = document.querySelector("form");
let botonEnviar = document.querySelector("#boton-form");
let errorNombre = document.querySelector("#errorNombre");
let errorContraseña = document.querySelector("#errorContraseña");
let errorReContraseña = document.querySelector("#errorReContraseña");
let inputEmail = document.querySelector("#email-form");
let errorMail = document.querySelector("#errorMail");
let registradoExito = document.querySelector("#registroExito");
let cruz =document.querySelector("#cruzExito");


//estados formulario//

let estadoNombre = false;
let estadoContraseña = false;
let estadoMail = false;

setInterval(apareceRegistro, 200);

//eventos registro//
botonEnviar.addEventListener("click", validarDatos);

//funciones registro//

function apareceRegistro() {
  form.style.top = "15vw";
  form.style.opacity = "1";
}

function errorFormulario() {
  form.style.top = "12vw";
}

function validarContraseña() {
  estadoContraseña = false;
  errorContraseña.innerHTML = "";
  errorReContraseña.innerHTML = "";
  let contraseña = document.querySelector("#contraseña-form").value;
  let recontraseña = document.querySelector("#recontraseña-form").value;
  if (contraseña != recontraseña) {
    errorFormulario();
    errorContraseña.innerHTML = "Las contraseñas deben ser iguales";
    errorReContraseña.innerHTML = "Las contraseñas deben ser iguales";
  }
  if (contraseña == "" && recontraseña == "") {
    errorContraseña.innerHTML = "la contraseña no puede estar vacia";
    errorReContraseña.innerHTML = "la contraseña no puede estar vacia";
  } else {
    estadoContraseña = true;
  }
}

function validarNombre() {
  estadoNombre = false;
  errorNombre.innerHTML = "";
  let nombre = document.querySelector("#nombre-form").value;
  if (nombre.length < 8) {
    errorFormulario();
    errorNombre.innerHTML = "El nombre debe contener al menos ocho caracteres";
  }
  if (nombre === "") {
    errorNombre.innerHTML = "El nombre no puede estar vacio";
    errorFormulario();
  } else {
    estadoNombre = true;
  }
}

function validarMail() {
  estadoMail = false;
  errorMail.innerHTML = "";
  let Email = document.querySelector("#email-form").value;
  if (!Email.includes("@") || !Email.includes(".com")) {
    errorMail.innerHTML = "debe haber un @  y .com";
    errorFormulario();
  } else {
    estadoMail = true;
  }
}





function validarDatos() {
  if (estadoContraseña && estadoMail && estadoNombre) {
    registradoExito.style.display="flex";
  } else {
    validarContraseña();
    validarNombre();
    validarMail();
  }
}



// --------------------------------------------------------------------exito//



cruz.addEventListener("click",abrirRegistroExito);


function abrirRegistroExito() {
  registradoExito.style.display="none";

}