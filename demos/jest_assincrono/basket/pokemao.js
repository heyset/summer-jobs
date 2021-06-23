// const fs = require('fs');
const fetch = require('node-fetch');

const BASE_URL = 'https://pokeapi.co/api/v2';

// fetch(`${BASE_URL}/pokemon/pikachu`)
//   .then((response) => response.json())
//   .then((data) => fs.writeFileSync('./data.json', JSON.stringify(data, null, '\t')));

const localData = require('./data.json');

function createNewPokemon(species) {
  return new Promise((resolve, reject) => {

    const url = `${BASE_URL}/pokemon/${species}`;

    const pokemon = {
      name: species,
      species,
      stats: {},
      level: 1,
      EV: {
        hp: 0,
        attack: 0,
        defense: 0,
        'special-attack': 0,
        'special-defense': 0,
        speed: 0,
      },
      IV: {
        hp: 0,
        attack: 0,
        defense: 0,
        'special-attack': 0,
        'special-defense': 0,
        speed: 0,
      },
    };

    fetchPokemon(species)
      .then((data) => {
        data.stats.forEach((stat) => {
          const { EV, IV } = pokemon;
          const statName = stat.stat.name;
          pokemon.stats[statName] = calculateStat(stat, EV[statName], IV[statName]);
        });
    
        return resolve(pokemon);
      })
    .catch((err) => reject(err));

  });

}

createNewPokemon('pikachu').then(console.log)

function calculateStat(stat, EV, IV) {

}

async function fetchPokemon(species) {
  return localData[0];
}
