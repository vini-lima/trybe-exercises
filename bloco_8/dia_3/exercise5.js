const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  return names.reduce((acc, currentWord) => {
    return acc + currentWord.split('').filter((character) => (
      character === 'A' || character === 'a'
    )).length;
  }, 0);
}

assert.deepEqual(containsA(), 20);

// function containsA() {
//   return names.reduce((acc, currentWord) => {
//     const string = currentWord.toString();
//     for (let index = 0; index < string.length; index += 1) {
//       if (string[index] === 'A' || string[index] === 'a') acc += 1;
//     }
//     return acc;
//   }, 0);
// }