const { describe, expect, it } = require('@jest/globals');
const { getGreeting, restartDb, hackTheDb } = require('./promises-end');

// Teste de sucesso

const expectedString = 'Salve! Meu nome é João Corça e minha comida favorita é churrasco.';
const expectedError = new Error('Explodiu');

describe('DONE - A função getGreeting,', () => {
  beforeEach(() => {
    restartDb();
  });

  it('retorna corretamente a string', () => {
  });

  it('retorna o erro correto quando falha', () => {
  });
});

describe('RETURN + CHAIN A função getGreeting,', () => {
  beforeEach(() => {
    restartDb();
  });

  it('retorna corretamente a string', () => {
  });

  it('retorna o erro correto quando falha', () => {
  });
});

describe('RETURN + RESOLVES/REJECTS A função getGreeting,', () => {
  beforeEach(() => {
    restartDb();
  })

  it('retorna corretamente a string', async () => {
  });
  
  it('retorna o erro correto quando falha', () => {
  });
});

describe('ASYNC/AWAIT A função getGreeting,', () => {
  beforeEach(() => {
    restartDb();
  });

  it('retorna corretamente a string', async () => {
  });

  it('retorna o erro correto quando falha', async () => {
  });
});
