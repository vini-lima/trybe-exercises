const service = require('./exercise1');

describe('Test function randomNumber', () => {
  test('Mock function randomNumber for return 10', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();    
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  test('Create a new implementation with 2 parameters', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
  });

  describe('Create a new implementation of randomNumber', () => {
    test('Create a new implementation with 3 parameters', () => {
      service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
      expect(service.randomNumber(2, 3, 5)).toBe(30);
      expect(service.randomNumber).toHaveBeenCalled();
      expect(service.randomNumber).toHaveBeenCalledTimes(1);
      expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 5);
    });

    test('Reset and create the new function with 1 parameter that returns its double', () => {
      service.randomNumber.mockReset();
      expect(service.randomNumber).toHaveBeenCalledTimes(0);
  
      service.randomNumber = jest.fn().mockImplementation(number => number * 2);
  
      expect(service.randomNumber(5)).toBe(10);
      expect(service.randomNumber).toHaveBeenCalled();
      expect(service.randomNumber).toHaveBeenCalledTimes(1);
      expect(service.randomNumber).toHaveBeenCalledWith(5);
    });
  });
});