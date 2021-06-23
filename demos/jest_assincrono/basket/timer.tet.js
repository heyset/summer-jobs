const { describe, it, expect } = require('@jest/globals');
const { createTimer } = require('./timer');

describe('fn createTimer(),', () => {
  it('Chama o endcallback quando o tempo acaba', (done) => {
    function endCallback(parametro) {
      expect(parametro).toBe('sei la');
      done();
    }

    function stopCallBack () {
      
    }

    const timer = createTimer({ duration: 2, endCallback, stopCallback });

    timer.start();
  });
});
