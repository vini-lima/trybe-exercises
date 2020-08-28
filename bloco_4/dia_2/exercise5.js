let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

for (let index = 0; index < numbers.length; index++) {
    if (maiorValor >= numbers[index]) {
    } else {
        maiorValor = numbers[index];
    }
}

console.log(`O maior valor é o ${maiorValor}`);