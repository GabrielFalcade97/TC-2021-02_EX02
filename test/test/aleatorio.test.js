const Aleatorio = require("../lib/aleatorio");

const aleatorio = new Aleatorio();

test("testing the first value equals the last value", () => {
    expect(aleatorio.gerarNumeroAleatorio(3, 3)).toBe(-1);
  });

  test("testing the last value is negative", () => {
    expect(aleatorio.gerarNumeroAleatorio(4, -2)).toBe(-1);
  });

  describe("Aleatorio", () => {
    test("testing the first value is negative", () => {
      expect(aleatorio.gerarNumeroAleatorio(-4, 7)).toBe(-4);
    });
});