const { expect } = require('@jest/globals');
const myRemoveWithoutCopy = require('./removeWithoutCopy');

const array = [1, 2, 3, 4];

describe('myRemoveWithoutCopy', () => {
  test('Expected array without 3', () => {
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4])
  });

  test('Expected array without 3', () => {
    expect(myRemoveWithoutCopy(array, 3)).not.toEqual([1, 2, 3, 4])
  });

  test('Array not changed', () => {
    myRemoveWithoutCopy(array, 3);
    expect(array).toEqual([1, 2, 4]);
  });

  test('Expected not array without 5', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado