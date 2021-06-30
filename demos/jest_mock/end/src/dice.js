function rollDie(maxFaces) {
  return Math.floor(Math.random() * maxFaces + 1);
}

module.exports = {
  rollDie,
}
