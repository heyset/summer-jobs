const { describe, expect, it } = require('@jest/globals');
const { getGreeting, restartDb, hackTheDb } = require('./promises-end');

// Teste de sucesso

const expectedString = 'Salve! Meu nome é João Corça e minha comida favorita é churrasco.';
const expectedError = new Error('Explodiu');

describe('DONE - A função getGreeting,', () => {
  beforeEach(() => {
    restartDb();
  });

  it('retorna corretamente a string', (done) => {
    getGreeting((person) => person.name === 'João Corça')
      .then((greeting) => {
        expect(greeting).toBe(expectedString);
        done();
      });
  });

  it('retorna o erro correto quando falha', (done) => {
    hackTheDb();

    getGreeting((person) => person.name === 'João Corça')
      .catch((error) => {
        expect(error).toEqual(expectedError);
        done();
      });
  });
});

describe('RETURN + CHAIN A função getGreeting,', () => {
  beforeEach(() => {
    restartDb();
  });

  it('retorna corretamente a string', () => {
    return getGreeting((person) => person.name === 'João Corça')
      .then((greeting) => {
        expect(greeting).toBe(expectedString);
      });
  });

  it('retorna o erro correto quando falha', () => {
    hackTheDb();

    return getGreeting((person) => person.name === 'João Corça')
      .catch((error) => {
        expect(error).toEqual(expectedError);
      });
  });
});

describe('RETURN + RESOLVES/REJECTS A função getGreeting,', () => {
  beforeEach(() => {
    restartDb();
  })

  it('retorna corretamente a string', async () => {
    const greeting = getGreeting((person) => person.name === 'João Corça');
    return expect(greeting).resolves.toBe(expectedString);
  });
  
  it('retorna o erro correto quando falha', () => {
    hackTheDb();

    const greeting = getGreeting((person) => person.name === 'João Corça');
    return expect(greeting).rejects.toEqual(expectedError);
  });
});

describe('ASYNC/AWAIT A função getGreeting,', () => {
  beforeEach(() => {
    restartDb();
  });

  it('retorna corretamente a string', async () => {
    const greeting = await getGreeting((person) => person.name === 'João Corça');
    expect(greeting).toBe(expectedString);
  });

  it('retorna o erro correto quando falha', async () => {
    hackTheDb();

    try {
      await getGreeting((person) => person.name === 'João Corça');
    } catch (err) {
      expect(err).toEqual(expectedError);
    }
  });
});
