const { describe, expect, it } = require('@jest/globals');
const { getGreeting, hackTheDb, restartDb } = require('./callbacks-end');

describe('A função getGreeting', () => {
  beforeEach(() => {
    restartDb();
  });

  it('retorna erro quando falha', (done) => {
    const expectedError = new Error('Explodiu');
    hackTheDb();

    function callback(err, result) {
      try {
        expect(err).not.toEqual(expectedError);
        done();
      } catch (err) {
        done(err);
      }
    }

    getGreeting((person) => person.name === 'Xuxa', callback);
  });

  it('retorna corretamente a string', () => {
    // const expectedString = 'Oi galerinha! Meu nome é Xuxa e minha comida favorita é algodão doce.';

    // function callback(err, result) {
    //   expect(result).toBe(expectedString);
    //   done();
    // }

    // getGreeting((person) => person.name === 'Xuxa', callback);
  });

});
