import juego from "./toros_vacas.js";
var numero_de_intentos = 10;

const numSecret = document.querySelector("#numero-secreto");
const form = document.querySelector("#toros-vacas-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p>"+ "Numero de intentos :" + numero_de_intentos + "</p>";
});

const guess = document.querySelector("#numero-intento");
const form2 = document.querySelector("#intento-form");
const div = document.querySelector("#resultado-div");

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  var secretNumber = numSecret.value
  var guessNumber = guess.value
  numero_de_intentos--;
  //div.innerHTML = "<p>"+secretNumber +"-----" + guessNumber +"-----"+juego(secretNumber, guessNumber) + "</p>";
  var resultado = juego(secretNumber, guessNumber);
  if(numero_de_intentos > 0 && resultado != "!!!!"){
    div.innerHTML = "<p>" + resultado +" | Numero de intentos restantes : " + numero_de_intentos + "</p>";
  }else if (numero_de_intentos <= 0 && resultado != "!!!!"){ 
    div.innerHTML = "<p>" + "Perdiste!" + "</p>";
  }else div.innerHTML = "<p>" + "Ganaste!" + "</p>";
});