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
      expect(mockedRandom).toHaveBeenCalled();
  });
});
