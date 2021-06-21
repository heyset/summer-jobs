const { rollDie } = require('./umDadoDoido');
const { describe, it, expect } = require('@jest/globals');

describe('Um dado de 10 faces retorna, ', () => {
  it('no máximo 10', () => {
    const mockedRandom = jest.spyOn(Math, 'random');

    mockedRandom
      .mockReturnValueOnce(0.99);

    expect(rollDie(10)).toBe(10);
  });

  it('no minimo 1', () => {
    const mockedRandom = jest.spyOn(Math, 'random');

    mockedRandom
      .mockReturnValueOnce(0);

    expect(rollDie(10)).toBe(1);
  });

  it('em media 5.5', () => {
    const mockedRandom = jest.spyOn(Math, 'random');

    let soma = 0;

    for (let i = 0; i < 10; i++) {
      const randomFactor = 0.09 + i * 0.1;

      mockedRandom
        .mockReturnValueOnce(randomFactor);

      soma += rollDie(10);
    }

    const media = soma / 10;

    expect(media).toBe(5.5);
  });
});
