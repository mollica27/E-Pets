function sum(a, b) {
    return a + b;
}

describe('Soma numeros', () => {
  it("First test", () => {
    const numero1 = 7;
    const nuemro2 = 10;

    let resultado = sum(numero1, nuemro2);

    expect(resultado).toEqual(numero1 + nuemro2);
  })

  it("Second test", () => {
    const numero1 = 7;
    const nuemro2 = 10;

    let resultado = sum(numero1, nuemro2);

    expect(resultado).toEqual(numero1 + nuemro2 + 1);
  })
});