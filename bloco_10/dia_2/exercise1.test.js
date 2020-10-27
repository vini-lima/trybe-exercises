const { expect, it } = require("@jest/globals");

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it('Test function uppercase', (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});

// **Código-base para os exercícios 2 e 3:**

// O código a seguir simula uma chamada ao banco de dados para buscar usuários.
// O resultado dessa busca é uma *Promise*, que é utilizada pelo método
// `getUserName`.

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('getUserName - async/await', () => {
  describe('when the user id exists', () => {
    it('returns the user name', async () => {
      expect.assertions(1);
      const data = await getUserName(4);
      expect(data).toEqual('Mark')
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(3);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 3 not found.' })
      }
    });
  });
});

// describe('getUserName - promise', () => {
//   describe('when the user id exists', () => {
//     it('returns the user name', () => {
//       expect.assertions(1);
//       return getUserName(4).then(data => expect(data).toEqual('Mark'));
//     });
//   });

//   describe('when the user id does not exists', () => {
//     it('returns an error', () => {
//       expect.assertions(1);
//       return getUserName(2).catch(error =>
//         expect(error).toEqual({ error: 'User with 2 not found.' })
//       );
//     });
//   });
// });
