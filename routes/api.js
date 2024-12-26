"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get("/api/convert", function (req, res) {
    const input = req.query.input;
    const index = input.search(/[a-zA-Z]/);
    if (index !== -1) {
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);
      const returnNum = parseFloat(convertHandler.convert(initNum, initUnit));
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const string = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );

      if (initNum == "invalid number" && initUnit == "invalid unit") {
        res.json({ error: "invalid number and unit" });
        return;
      } else if (initNum == "invalid number") {
        res.json({ error: "invalid number" });
        return;
      } else if (initUnit == "invalid unit") {
        res.json({ error: "invalid unit" })
        return;
      } else {
        res.json({
          initNum,
          initUnit,
          returnNum,
          returnUnit,
          string,
        });
        return;
      }
    }
  });
};
