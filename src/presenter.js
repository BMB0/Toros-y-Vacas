import juego from "./toros_vacas.js";

const first = document.querySelector("#numero-secreto");
const form = document.querySelector("#toros-vacas-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + firstNumber + "</p>";
  //div.innerHTML = "<p>" + juego(firstNumber, secondNumber) + "</p>";
});
