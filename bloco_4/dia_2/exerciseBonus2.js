let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < (numbers.length - 1); j += 1) {
        if (numbers[i] > numbers[j]) {
            let position = numbers[i];
      
            numbers[i] = numbers[j];
            numbers[j] = position;
          }
    }
}

console.log(numbers);