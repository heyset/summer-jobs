const getBestSong = () => new Promise((resolve, reject) => resolve('Querido Meu Amor'));


// describe('Sob quaisquer circunstancias,', () => {
//   it ('A melhor musica do mundo é Querido Meu Amor', () => {
//     expect.assertions(1);
//     return getBestSong().then((song) => {
//       expect(song).toBe('Querido Meu Amor');
//     })
//   });
// });

describe('Sob quaisquer circunstancias...', () => {
  it ('A melhor musica do mundo é Querido Meu Amor', () => {
    // expect.assertions(1);
    expect(getBestSong()).resolves.toBe('Parara Tibum');
  });
});
