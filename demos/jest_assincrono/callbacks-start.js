// Este array simula uma coleção em um banco de dados não-relacional.

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

// Esta variável abaixo, juntamente com as duas funções, hackTheDb() e restartDb() permitem controlar a simulação de uma falha.

// OE: Alguém pode, neste momento, perguntar se para testar funções assíncronas você precisa inserir esse tipo de código nos arquivos de código.
// Caso ninguém pergunte, você pode perguntar para a turma se alguém sabe se é preciso.
// A resposta é não, pois é possível simular uma falha diretamente nos testes, usando MOCKS, que é assunto da aula de amanhã :D

let shouldFail = false;

function hackTheDb() {
  shouldFail = true;
}

function restartDb() {
  shouldFail = false;
}

// Esta função simula uma função que busca no banco de dados.

// OE: Explique-a bem pausadamente, pois ela é relativamente complexa. Foi criada no intuito de simular o mais próximo possível um exemplo real, por isso o modelo de callback com um argumento de erro e um de resultado.

function findOne(filter, callback) {
  setTimeout(() => {
    if (shouldFail) {
      return callback(new Error('Explodiu'), null);
    }

    const queryResults = db.find(filter);
    
    callback(null, queryResults);
  }, 300);
}

// Esta função utiliza a função de cima para montar uma string a partir da pessoa usuária recuperada do "banco de dados".

// OE: Novamente, explique pausadamente a função. Ela possui dois parâmetros que são callbacks: um filtro, igual ao da função Array.filter, e uma função que vai ser chamada quando a operação for concluída. Essa função deve ter como parâmetros o erro e o resultado.

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
