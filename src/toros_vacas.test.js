import juego from "./toros_vacas.js";

describe("Sumar", () => {
  it("Devuelve una cadena vacia al ingresar un numero que no coincide ni en posicion ni valor", () => {
    expect(juego("1234", "5678")).toEqual("");
  });
  it("Devuelve !!!! al ingresar una cadena de numeros que coincidan en posicion y valor", () => {
    expect(juego("1234", "1234")).toEqual("!!!!");
  });
  it("Devuelve ! si el primer numero que coincide en posicion y valor", () => {
    expect(juego("1234", "1567")).toEqual("!");
  });
  it("Devuelve ! si el segundo numero que coincide en posicion y valor", () => {
    expect(juego("1234", "5278")).toEqual("!");
  });
});
