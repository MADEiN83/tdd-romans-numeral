class Utils {
  numbers = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    500: "D",
    1000: "M",
  };

  convert = (number) => {
    let output = "";

    const keys = Object.keys(this.numbers);

    while (number > 0) {
      const [wantedValue] = keys
        .filter((aNumber) => aNumber <= number)
        .reverse();
      number -= wantedValue;
      output += this.numbers[wantedValue];
    }

    return output;
  };
}

module.exports = Utils;
