const { describe, expect, it } = require('@jest/globals');
const { getGreeting, hackTheDb, restartDb } = require('./callbacks-end');

describe('A função getGreeting', () => {
  it('retorna corretamente a string', (done) => {
    const expectedString = 'Oi galerinha! Meu nome é Xuxa e minha comida favorita é algodão doce.';
  });

  it('retorna erro quando falha', (done) => {
    const expectedError = 'Explodiu';
  });
});
