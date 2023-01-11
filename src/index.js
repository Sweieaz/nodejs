function getOdds(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

function getSquareOfOdds(arr) {
  const squareOfOdds = [];
  arr.forEach((num) => num % 2 !== 0 && squareOfOdds.push(num * num));
  return squareOfOdds;
}

function getSumOfOdds(arr) {
  const sumOfOdds = arr.reduce((acc, currentValue) => {
    if (currentValue % 2 !== 0) {
      acc += currentValue;
    }
    return acc;
  });
  return sumOfOdds;
}

function getSumOfSquareOfEvenNumbers(arr) {
  const sumOfSquareOfEven = arr
    .filter((num) => num % 2 === 0)
    .reduce((acc, curentValue) => acc + curentValue ** 2, 0);
  return sumOfSquareOfEven;
}

module.exports = {
  getOdds,
  getSquareOfOdds,
  getSumOfOdds,
  getSumOfSquareOfEvenNumbers,
};
