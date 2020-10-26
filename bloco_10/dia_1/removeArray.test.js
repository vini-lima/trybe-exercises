const { test, expect } = require('@jest/globals');
const myRemove = require('./removeArray');

const array = [1, 2, 3, 4];

describe('myRemove', () => {
  test('Expected array without 3', () => {
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  });

  test('Expected not array without 3', () => {
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Array not changed', () => {
    myRemove(array, 3);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  test('Expected not array without 5', () => {
    expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
  });
});
