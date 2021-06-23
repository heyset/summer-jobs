const { describe, expect, it } = require('@jest/globals');
const { getGreeting } = require('./callback-1-end');

describe('A função getGreeting', () => {
  it('retorna corretamente a string', (done) => {
    const expectedString = 'Oi galerinha! Meu nome é Xuxa e minha comida favorita é algodão doce.';

    function callback(err, result) {
      expect(result).toBe(expectedString);
      done();
    }

    getGreeting((person) => person.name === 'Xuxa', callback);
  });
});
