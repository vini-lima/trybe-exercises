const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  test('Return fizzbuzz, number divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('Return fizz, number divisible by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('Return buzz, number divisible by 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  test('Return number, number not divisible by 3 and 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  test('Return false, parameter not a number', () => {
    expect(myFizzBuzz('7')).toBeFalsy();
  });
});