function ConvertHandler() {
  const validUnits = ["kg", "L", "mi", "gal", "lbs", "km"];

  this.getNum = function (input) {
    let result;
    const index = input.search(/[a-zA-Z]/);
    if (index === -1 || index === 0) {
      result = 1;
    } else {
      const fractions = input.slice(0, index).trim().split("/");
      if (fractions.length > 2) {
        result = "invalid number";
      } else {
        try {
          result = eval(input.slice(0, index).trim());
        } catch (e) {
          result = "invalid number";
        }
      }
    }
    return result;
  };

  this.getUnit = function (input) {
    let result;
    const index = input.search(/[a-zA-Z]/);
    if (index === -1) {
      result = "invalid unit";
    } else {
      result = input.slice(index).trim().toLowerCase();
      if (result === "l") {
        result = "L";
      }
      if (!validUnits.includes(result)) {
        result = "invalid unit";
      }
    }
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit) {
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    if (typeof unit === "undefined") {
      return "invalid unit";
    } else {
      let result = unit;
      switch (unit) {
        case "gal":
          result = "gallons";
          break;
        case "lbs":
          result = "pounds";
          break;
        case "mi":
          result = "miles";
          break;
        case "L":
          result = "liters";
          break;
        case "kg":
          result = "kilograms";
          break;
        case "km":
          result = "kilometers";
          break;
      }
      return result;
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        return "invalid number";
    }
    if (typeof result === "undefined") {
      return "invalid number";
    }
    return Number(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;
    let initUnitString = this.spellOutUnit(initUnit);
    let returnUnitString = this.spellOutUnit(returnUnit);
    result = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
    return result;
  };
}

module.exports = ConvertHandler;
