"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get("/api/convert", function (req, res) {
    const match = req.query.input.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (match) {
      const initNum = convertHandler.getNum(match);
      const initUnit = convertHandler.getUnit(match);
      const returnNum = parseFloat(convertHandler.convert(initNum, initUnit).toFixed(5));
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const string = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );

      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string,
      });
    }
  });
};
