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
  }
};
