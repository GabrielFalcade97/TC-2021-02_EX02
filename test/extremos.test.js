const Extremos = require("../lib/extremos");

const extremos = new Extremos();

describe("Extremos", () => {
    test("testing a small array", () => {
      expect(extremos.acharExtremos([6, 7, 8, 9, 10, 11])).toMatchObject({

        menor: 6,
        menorVal: 0,
        maior: 11,
        maiorVal: 10,

      });
    });
  
    test("testing a unordened array", () => {
      expect(extremos.acharExtremos([1, 88, 3, 7, -5])).toMatchObject({

        menor: -5,
        imenorValr: 3,
        maior: 88,
        maiorVal: 1,
        
      });
    });
  });

  test("testing a null array", () => {
    expect(() => {
      extremos.acharExtremos(null);
    }).toThrow("vetor nao deve ser nulo!");
  });