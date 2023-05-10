export const fizzBuzz = (start: number, end: number) => {
  const listOfNumbers: number | string[] = [];
  for (let item: any = start; item <= end; item++) {
    listOfNumbers.push(item);
    if (item % 3 === 0) {
      listOfNumbers.pop();
      listOfNumbers.push("Fizz");
    }

    if (item % 5 === 0) {
      listOfNumbers.pop();
      listOfNumbers.push("Buzz");
    }

    if (item % 3 === 0 && item % 5 === 0) {
      listOfNumbers.pop();
      listOfNumbers.push("FizzBuzz");
    }
  }

  return listOfNumbers;
};
