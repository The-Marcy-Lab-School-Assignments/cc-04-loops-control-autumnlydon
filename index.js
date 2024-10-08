//Write your solutions in this file, don't forget to test your functions.

//Problem 1

const countFromOne = (num) => {
  let i = 1;
  while (i <= num) {
    console.log(i);
    i++;
  }
};

//Problem 2

const countEveryOdd = (num) => {
  let i = 0;
  while (i <= num) {
    if (i % 2 === 1) {
      console.log(i);
    }
    i++;
  }
};

//Problem 3

const isNegative = (num) => {
  if (num < 0) {
    return true;
  } else {
    return false;
  }
};

//Problem 4

const betweenFiveAndParty = (num) => {
  if (num > 5 && num < 20) {
    return true;
  } else {
    return false;
  }
};

//Problem 5

const sumOfThreeOrFive = () => {
  let i = 0;
  let sum = 0;
  while (i < 1000) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
    i++;
  }
  return sum;
};

//Problem 6

const isAllLowerCase = (str) => {
  if (str === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

//Bonus

const countMultiplesOfFive = (arr) => {
  let multiple = 0;
  arr.forEach((element) => {
    if (element % 5 === 0) {
      multiple += 1;
    }
  });
  return multiple;
};
