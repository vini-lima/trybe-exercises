const longestWord = (phrase) => {
  let array = phrase.split(' ');
  let result = '';
  for (let index = 0; index < array.length; index += 1) {
    if (result.length >= array[index].length) {   
    } else {
      result = array[index];
    }
  } return result;
} 

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));