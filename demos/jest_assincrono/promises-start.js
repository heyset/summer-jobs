// No começo, o código é exatamente o mesmo.

const db = [
  {
    id: 123,
    name: 'Xuxa',
    favoriteFood: 'algodão doce',
    greeting: 'Oi galerinha!',
  },
  {
    id: 321,
    name: 'João Corça',
    favoriteFood: 'churrasco',
    greeting: 'Salve!',
  },
  {
    id: 404,
    name: 'Faustina O\'Missing',
    favoriteFood: null,
    greeting: 'Oi.',
  },
];

let shouldFail = false;

function hackTheDb() {
  shouldFail = true;
}

function restartDb() {
  shouldFail = false;
}

// Até aqui o código é o mesmo.

// A função abaixo retorna uma promise e rejeita caso a variável shouldFail seja verdadeira.

function findOne(filter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        return reject('Explodiu');
      }

      const queryResults = db.find(filter);
      
      resolve(queryResults);
    }, 100);
  })
}

// Abaixo temos uma função assíncrona.

// OE: Ressalte que as duas formas de trabalhar são válidas, mas frise que, fora de testes, sempre que você escrever um await, precisa lidar com o erro com try/catch.
// OE: Explique também que toda função assíncrona retorna uma "promise-like", que a gente pode tratar basicamente como uma promise mesmo.

async function getGreeting(filter) {
  try {
    const { greeting, name, favoriteFood } = await findOne(filter);
    const greetingString = `${greeting} Meu nome é ${name} e minha comida favorita é ${favoriteFood}.`;

    return greetingString
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getGreeting,
  hackTheDb,
  restartDb,
}