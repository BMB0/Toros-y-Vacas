import bisonte from "./bisonte.js";

describe("Primo", () => {
  it("Devuelve % si el primer caracter de la cadena es un primo", () => {
    expect(bisonte("2894")).toEqual("%");
  });
  it("Devuelve % si el segundo caracter de la cadena es un primo", () => {
    expect(bisonte("8294")).toEqual("%");
  });
  it("Devuelve % si el segundo caracter de la cadena es un primo", () => {
    expect(bisonte("8924")).toEqual("%");
  });
});
