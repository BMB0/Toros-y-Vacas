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
  it("Devuelve ! si el tercer numero que coincide en posicion y valor", () => {
    expect(juego("1234", "5637")).toEqual("!");
  });
  it("Devuelve ! si el cuarto numero que coincide en posicion y valor", () => {
    expect(juego("1234", "5674")).toEqual("!");
  });
  it("Devuelve * si el primer numero coincide en valor", () => {
    expect(juego("1234", "5617")).toEqual("*");
  });
  it("Devuelve * si el segundo numero coincide en valor", () => {
    expect(juego("1234", "2567")).toEqual("*");
  });
  it("Devuelve * si el tercer numero coincide en valor", () => {
    expect(juego("1234", "3567")).toEqual("*");
  });
  it("Devuelve * si el cuarto numero coincide en valor", () => {
    expect(juego("1234", "4567")).toEqual("*");
  });
  it("Devuelve solo un * si el numero se repite", () => {
    expect(juego("1231", "5617")).toEqual("*");
  });
   it("Devuelve solo un * si el numero se repite", () => {
    expect(juego("1276", "3281")).toEqual("!*");
  });
});
