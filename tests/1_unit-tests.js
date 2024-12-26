const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  suite("Input", function () {
    test("Whole number input", function (done) {
      let input = "32lbs";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test("Decimal number input", function (done) {
      let input = "3.2kg";
      assert.equal(convertHandler.getNum(input), 3.2);
      done();
    });

    test("Fractional number input", function (done) {
      let input = "3/2kg";
      assert.equal(convertHandler.getNum(input), 1.5);
      done();
    });

    test("Fractional number input with decimal", function (done) {
      let input = "3.2/2kg";
      assert.equal(convertHandler.getNum(input), 1.6);
      done();
    });

    test("Double fraction", function (done) {
      let input = "3/2/3kg";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });

    test("Empty numerical input", function (done) {
      let input = "kg";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });

    test("Valid units input", function (done) {
      let input = "1kg";
      assert.equal(convertHandler.getUnit(input), "kg");
      input = "1lbs";
      assert.equal(convertHandler.getUnit(input), "lbs");
      input = "1gal";
      assert.equal(convertHandler.getUnit(input), "gal");
      input = "1l";
      assert.equal(convertHandler.getUnit(input), "L");
      input = "1km";
      assert.equal(convertHandler.getUnit(input), "km");
      input = "1mi";
      assert.equal(convertHandler.getUnit(input), "mi");
      done();
    });

    test("Invalid units input", function (done) {
      let input = "1ko";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done();
    });
  });
});
