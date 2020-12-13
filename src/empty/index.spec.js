const Utils = require("./index.js");

describe("Utils tests", () => {
  const utils = new Utils();

  it("should return `I` when `1` is provided", () => {
    expect(utils.convert(1)).toBe("I");
  });
});
