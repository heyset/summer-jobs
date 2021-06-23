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
]

let shouldFail = false;

function hackTheDb() {
  shouldFail = true;
}

function restartDb() {
  shouldFail = false;
}

function findOne(filter, callback) {
  setTimeout(() => {
    if (shouldFail) {
      return callback(new Error('Explodiu'), null);
    }

    const queryResults = db.find(filter);
    
    callback(null, queryResults);
  }, 100);
}

function getGreeting(filter, callback) {
  findOne(filter, function(err, result) {
    if (err) {
      return callback(err, null);
    }

    const { greeting, name, favoriteFood } = result;

    const greetingString = `${greeting} Meu nome é ${name} e minha comida favorita é ${favoriteFood}.`;

    callback(null, greetingString);
  });
}

module.exports = {
  getGreeting,
  hackTheDb,
  restartDb,
}
