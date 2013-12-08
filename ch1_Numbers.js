module.exports = {
  toBaseString: function toBaseString (number, base) {
    var output, remainder, reducedNumber, restOfString;

    if (number < base) {
      output = String(number);
    } else {
      remainder = number % base;
      output = remainder;
      reducedNumber = (number - remainder) / base;
      restOfString = toBaseString(reducedNumber, base);
      output = restOfString + output;
    }

    return output;
  },
  stringToValue: function stringToValue (string, base) {
    var output, remainingString, remainingStringValue;

    if (!string) {
      output = 0;
    } else {
      output = Number(string.slice(-1));
      remainingString = string.slice(0, -1);
      remainingStringValue = stringToValue(remainingString, base);
      output = (base * remainingStringValue) + output;
    }
    return output;
  },
  addBinary: function (a, b) {
    var output = '',
        carryDigit = 0,
        writeDigit,
        i = a.length,
        _a, _b;

    for (i; i > 0; i--) {
      _a = Number(a[i - 1]);
      _b = Number(b[i - 1]);

      if (_a == _b) {
        writeDigit = carryDigit;
        carryDigit = _a;
      } else {
        writeDigit = carryDigit == 0 ? 1 : 0;
      }
      output = writeDigit + output;
    }

    if (carryDigit == 1) {
      output = 1 + output;
    }
    return output;
  }
};
