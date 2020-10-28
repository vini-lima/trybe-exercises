const service = require('./exercise2');

// describe('News implementations in functions', () => {
//   test('New implementation returnToUpperCase for returnToLowerCase ', () => {
//     service.returnToUpperCase = jest.fn().mockImplementation(string => string.toLowerCase());

//     expect(service.returnToUpperCase('LOWERCASE')).toBe('lowercase');
//     expect(service.returnToUpperCase).toHaveBeenCalled();
//     expect(service.returnToUpperCase).toHaveBeenCalledTimes(1);
//     expect(service.returnToUpperCase).toHaveBeenCalledWith('LOWERCASE');
//   });

//   test('New implementation returnFirstCharacter for returnLastCharacter ', () => {
//     service.returnFirstCharacter = jest.fn().mockImplementation(string => string[string.length - 1]);

//     expect(service.returnFirstCharacter('last')).toBe('t');
//     expect(service.returnFirstCharacter).toHaveBeenCalled();
//     expect(service.returnFirstCharacter).toHaveBeenCalledTimes(1);
//     expect(service.returnFirstCharacter).toHaveBeenCalledWith('last');
//   });

//   test('New implementation concat 3 strings ', () => {
//     service.concatStrings = jest.fn().mockImplementation((string1, string2, string3) => string1.concat(string2, string3));

//     expect(service.concatStrings('#V', 'Q', 'V')).toBe('#VQV');
//     expect(service.concatStrings).toHaveBeenCalled();
//     expect(service.concatStrings).toHaveBeenCalledTimes(1);
//     expect(service.concatStrings).toHaveBeenCalledWith('#V', 'Q', 'V');
//   });

// });

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const first = jest
      .spyOn(service, "returnToUpperCase")
      .mockImplementation(a => a.toLowerCase());

    expect(first("UPPERCASE")).toBe("uppercase");
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith("UPPERCASE");

    service.returnToUpperCase.mockRestore();

    expect(service.returnToUpperCase("lowercase")).toBe("LOWERCASE");
  });
});
