import { fizzBuzz } from "./fizzbuzz.js";

describe("Given a function fizzBuzz", () => {
  describe("When it receives 2 and 15", () => {
    test("Then it should return [2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']", () => {
      const startNumber = 2;
      const endNumber = 15;
      const expectedOutput = [
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
      ];

      const actualOutput = fizzBuzz(startNumber, endNumber);

      expect(actualOutput).toStrictEqual(expectedOutput);
    });
  });
});
