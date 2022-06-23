const { add, badAdd, multiply, badMultiply } = require("../debug");

describe("Test debug functions", () => {
  it("add(1,1) === 2", () => {
    const expected = 2;
    const result = add(1, 1);
    expect(result).toEqual(expected);
  });

  it("badAdd(5,4) === 9", () => {
    const expected = 9;
    const result = badAdd(5, 4);
    expect(result).toEqual(expected);
  });

  it("multiply(12,0) === 0", () => {
    const expected = 0;
    const result = multiply(12, 0);
    expect(result).toEqual(expected);
  });

  it("badMultiply(7,7) === 49", () => {
    const expected = 49;
    const result = badMultiply(7, 7);
    expect(result).toEqual(expected);
  });

  it("nested test", () => {
    const expected = 0;
    const result = multiply(add(1, 3), add(1, multiply(1, add(0, -1))));
    expect(result).toEqual(expected);
  });
});
