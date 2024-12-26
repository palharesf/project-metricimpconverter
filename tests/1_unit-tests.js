const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {

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

  test("Valid unit conversion input", function (done) {
    let input = "kg";
    assert.equal(convertHandler.getReturnUnit(input), "lbs");
    input = "lbs";
    assert.equal(convertHandler.getReturnUnit(input), "kg");
    input = "gal";
    assert.equal(convertHandler.getReturnUnit(input), "L");
    input = "L";
    assert.equal(convertHandler.getReturnUnit(input), "gal");
    input = "km";
    assert.equal(convertHandler.getReturnUnit(input), "mi");
    input = "mi";
    assert.equal(convertHandler.getReturnUnit(input), "km");
    done();
  });

  test("Valid spelled-out strings", function (done) {
    let input = "kg";
    assert.equal(convertHandler.spellOutUnit(input), "kilograms");
    input = "lbs";
    assert.equal(convertHandler.spellOutUnit(input), "pounds");
    input = "gal";
    assert.equal(convertHandler.spellOutUnit(input), "gallons");
    input = "L";
    assert.equal(convertHandler.spellOutUnit(input), "liters");
    input = "km";
    assert.equal(convertHandler.spellOutUnit(input), "kilometers");
    input = "mi";
    assert.equal(convertHandler.spellOutUnit(input), "miles");
    done();
  });

  test("Conversion gal to L", function (done) {
    let input = "1";
    assert.equal(convertHandler.convert(input, "gal"), 3.78541);
    done();
  });

  test("Conversion L to gal", function (done) {
    let input = "1";
    assert.equal(convertHandler.convert(input, "L"), 0.26417);
    done();
  });

  test("Conversion lbs to kg", function (done) {
    let input = "1";
    assert.equal(convertHandler.convert(input, "lbs"), 0.45359);
    done();
  });

  test("Conversion kg to lbs", function (done) {
    let input = "1";
    assert.equal(convertHandler.convert(input, "kg"), 2.20462);
    done();
  });

  test("Conversion mi to km", function (done) {
    let input = "1";
    assert.equal(convertHandler.convert(input, "mi"), 1.60934);
    done();
  });

  test("Conversion km to mi", function (done) {
    let input = "1";
    assert.equal(convertHandler.convert(input, "km"), 0.62137);
    done();
  });
});
