const { expect } = require('chai');
const { cockneySlangIt } = require('../cockneySlangIt');

describe("cockneySlangIt", function() {
  it("should throw an error when a non-string is input", () => {
    const notAString = cockneySlangIt.bind(null, 2);
    const string = cockneySlangIt.bind(null, "hello");

    expect(notAString).to.throw();
    expect(string).to.not.throw();
  });

  it("should return an expression with cockney", () => {
    const test = cockneySlangIt("morning!");
    const test2 = cockneySlangIt("I am married.");
    const test3 = cockneySlangIt('going to the bank');

    expect(test).to.equal("day's a-dawning!");
    expect(test2).to.equal("I am cut and carried.");
    expect(test3).to.equal('going to the rattle and clank');
  });
})