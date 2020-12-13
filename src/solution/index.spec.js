const Utils = require("./index.js");

describe("Utils tests", () => {
  const utils = new Utils();

  it("should return `I` when `1` is provided", () => {
    expect(utils.convert(1)).toBe("I");
  });

  it("should return `II` when `2` is provided", () => {
    expect(utils.convert(2)).toBe("II");
  });

  it("should return `IV` when `4` is provided", () => {
    expect(utils.convert(4)).toBe("IV");
  });

  it("should return `V` when `5` is provided", () => {
    expect(utils.convert(5)).toBe("V");
  });

  it("should return `IX` when `9` is provided", () => {
    expect(utils.convert(9)).toBe("IX");
  });

  it("should return `X` when `10` is provided", () => {
    expect(utils.convert(10)).toBe("X");
  });

  it("should return `XL` when `40` is provided", () => {
    expect(utils.convert(40)).toBe("XL");
  });

  it("should return `XC` when `90` is provided", () => {
    expect(utils.convert(90)).toBe("XC");
  });

  it("should return `MMDCCCLXXXVIII` when `2888` is provided", () => {
    expect(utils.convert(2888)).toBe("MMDCCCLXXXVIII");
  });
});
