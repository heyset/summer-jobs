const createTimer = (duration = 30, callbacks = {}, { verbose } = {}) => {
  const defaultFunction = verbose ? console.log : () => {};

  callbacks = Object.assign({
    tick: defaultFunction,
    start: defaultFunction,
    stop: defaultFunction,
    end: defaultFunction,
    reset: defaultFunction,
    error: defaultFunction,
  }, callbacks);

  let interval = null;
  let remaining = duration;

  return {
    getRemaining: () => remaining,

    start: () => {
      if (!interval) {
        interval = setInterval(() => {
          remaining -= 1;
          callbacks.tick(remaining);
  
          if (remaining === 0) {
            clearInterval(interval);
            interval = null;
            callbacks.end('O tempo do cronômetro acabou.');
          }
        }, 1000);
        callbacks.start(`O cronômetro foi iniciado com ${duration} segundos.`);
        callbacks.tick(remaining);
      } else {
        callbacks.end('O cronômetro já está rodando.')
      }
    },

    stop: () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
        callbacks.stop('O cronômetro foi parado.');
      } else {
        callbacks.end('O cronômetro já não está rodando.');
      }
    },

    reset: () => {
      if (!interval) {
        remaining = duration;
        resetCallback();
      } else {
        callbacks.end('Você precisa parar o cronômetro antes de reiniciá-lo.');
      }
    }
  };
};

createTimer(10, {}, { verbose: true }).start();

// testar se:
//   dia 2: remaining diminui conforme o tempo passa
//   dia 3: endCallback e chamado quando o tempo acaba
//   dia 3: e NAO antes
//   dia 3: stopCallback e chamado quando o metodo stop e chamado
//   dia 3: e NAO antes

module.exports = {
  createTimer,
};