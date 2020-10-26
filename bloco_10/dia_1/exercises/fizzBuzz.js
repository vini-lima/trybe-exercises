function fizzBuzz(n) {
  for (let index = 1; index <= n; index += 1) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log('fizzbuzz');
    } else if (index % 3 === 0) {
      console.log('fizz');
    } else if (index % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(index);
    }
  }
}

fizzBuzz(5);

module.exports = fizzBuzz;