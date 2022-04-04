// FUNCTIONS

const functions = require("./utils/functions");

// TESTS ISEVEN

describe("is even ?", () => {
  it("should return false", () => {
    const result = functions.isEven(5);
    expect(result).toBe(false);
  });
});

describe("is even ?", () => {
  it("should return true", () => {
    const result = functions.isEven(4);
    expect(result).toBe(true);
  });
});

describe("is even ?", () => {
  it("should return false", () => {
    const result = functions.isEven("jezf");
    expect(result).toBe(false);
  });
});

describe("is even ?", () => {
  it("should return true", () => {
    const result = functions.isEven("12");
    expect(result).toBe(true);
  });
});

// TEST FORMATDATE

describe("Format date", () => {
  it("From yyyy-mm-dd should return dd/mm/yyyy", () => {
    const result = functions.formatDate("1992-01-05");
    expect(result).toBe("05/01/1992");
  });
});

describe("Format date", () => {
  it("Should return null from bad input", () => {
    const result = functions.formatDate("19920105");
    expect(result).toBe(null);
  });
});
