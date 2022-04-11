import juego from "./toros_vacas.js";

const numSecret = document.querySelector("#numero-secreto");
const form = document.querySelector("#toros-vacas-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const guess = document.querySelector("#numero-intento");
const form2 = document.querySelector("#intento-form");
const div = document.querySelector("#resultado-div");

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  var secretNumber = numSecret.value
  var guessNumber = guess.value
  //div.innerHTML = "<p>"+secretNumber +"-----" + guessNumber +"-----"+juego(secretNumber, guessNumber) + "</p>";
  div.innerHTML = "<p>" + juego(secretNumber, guessNumber) + "</p>";
});