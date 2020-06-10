const answerPhone = require("../src/asyncJest");

describe("o retorno do telefonema", () => {
  test("atende", (done) => {
    expect(answerPhone(true)).resolves.toBe('Oi!')
    done();
  });
  test("ocupado", (done) => {
    expect(answerPhone(false)).rejects.toBe('Infelizmente não podemos atender...')
    done();
   });
});

