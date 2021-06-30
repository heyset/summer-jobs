function multiply({ a = 1, b = 3, c = 5} = {}) {
  return a * b * c;
}

console.log(multiply()); // 15
console.log(multiply({ a: 2, b: 4, c: 5 })) // 40
console.log(multiply({ a: 3 })) // 45

