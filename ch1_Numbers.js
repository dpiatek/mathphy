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
  }
};
