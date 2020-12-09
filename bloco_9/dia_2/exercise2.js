const generateArray = () => {
  const array = [];
  while (array.length < 10) array.push(Math.round(Math.random() * 50));
  const sum = array.map(number => Math.pow(number, 2))
    .reduce((acc, currNumber) => acc + currNumber, 0);
  if (sum < 8000) return sum;
  throw new Error();
}

const arraySum = sum => [2, 3, 5, 10].map(number => Math.round(sum / number));

const fetchPromise = async () => {
  try {
    const sum = await generateArray();
    const array = await arraySum(sum);
    console.log(array);
  } catch {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();