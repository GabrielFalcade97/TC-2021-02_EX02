const Aleatorio = require("../lib/aleatorio");

const aleatorio = new Aleatorio();

test("testing the first value equals the last value", () => {
    expect(aleatorio.gerarNumeroAleatorio(3, 3)).toBe(-1);
  });
