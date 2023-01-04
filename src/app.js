/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", enviarDatos);

  function enviarDatos(e) {
    e.preventDefault();

    let alerta = document.querySelector("#alertita");
    let tarjeta = document.querySelector("#card");
    console.log(tarjeta);
    let cvc = document.querySelector("#cvc");
    console.log(cvc);
    let amount = document.querySelector("#cantidad");
    console.log(amount);
    let primerNombre = document.querySelector("#nombre");
    console.log(primerNombre.value);
    let apellido = document.querySelector("#apellido");
    console.log(apellido.value);
    let ciudad = document.querySelector("#inputCity");
    console.log(ciudad.value);
    let estado = document.querySelector("#inputState");
    console.log(estado.value);
    let codigoPostal = document.querySelector("#inputZip");
    console.log(codigoPostal.value);
    let cards = document.querySelector("#tarj");
    console.log(cards.value);
    let mensaje = document.querySelector("#floatingTextarea2");
    console.log(mensaje.value);
    if (primerNombre.value === "") {
      card.classList.add("bg-danger", "bg-opacity-25");
      alertita.styles;
    }
  }
};
