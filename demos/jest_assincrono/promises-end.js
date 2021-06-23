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