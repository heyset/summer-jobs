const { describe, expect, it } = require('@jest/globals');
const { getGreeting, hackTheDb, restartDb } = require('./callbacks-end');

describe('A função getGreeting', () => {
   it('retorna erro quando falha', (done) => {
    const expectedError = new Error('Explodiu');
    hackTheDb();

    function callback(err, result) {
      expect(err).toEqual(expectedError);
      done();
    }

    getGreeting((person) => person.name === 'Xuxa', callback);
  });

  it('retorna corretamente a string', (done) => {
    const expectedString = 'Oi galerinha! Meu nome é Xuxa e minha comida favorita é algodão doce.';

    function callback(err, result) {
      expect(result).toBe(expectedString);
      done();
    }

    getGreeting((person) => person.name === 'Xuxa', callback);
  });
});
