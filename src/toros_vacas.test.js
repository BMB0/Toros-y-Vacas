import juego from "./toros_vacas.js";

describe("Sumar", () => {
  it("Devuelve una cadena vacia al ingresar un numero que no coincide ni en posicion ni valor ni en posicion", () => {
    expect(juego(1234, 5678)).toEqual("");
  });
  
});
