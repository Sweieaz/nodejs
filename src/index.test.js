const {
  getOdds,
  getSquareOfOdds,
  getSumOfOdds,
  getSumOfSquareOfEvenNumbers,
} = require("./index");
const arr = [1, 2, 3, 4, 5, 6];

test("filter odd numbers from array", () => {
  const odds = getOdds(arr);
  expect(odds).toEqual([1, 3, 5]);
});

test("get square of odd numbers from array", () => {
  const squareOfOdds = getSquareOfOdds(arr);
  expect(squareOfOdds).toEqual([1, 9, 25]);
});

test("get sum of odds in array", () => {
  const sumOfOdds = getSumOfOdds(arr);
  expect(sumOfOdds).toEqual(9);
});

test("get sum of square of even numbers in array", () => {
  const sumOfSquareOfEven = getSumOfSquareOfEvenNumbers(arr);
  expect(sumOfSquareOfEven).toEqual(56);
});
