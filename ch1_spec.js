var number = require('./ch1_Numbers');
var expect = require('chai').expect;

describe('Numbers:', function () {

  describe('12 represented in different bases', function () {
    it('should return the string 12 in base 10', function () {
      expect(number.toBaseString(12, 10)).to.equal('12');
    });
    it('should return the string 1100 in base 2', function () {
      expect(number.toBaseString(12, 2)).to.equal('1100');
    });
    it('should return the string 14 in base 8', function () {
      expect(number.toBaseString(12, 8)).to.equal('14');
    });
  });

  describe('the string 1100 to value in different bases', function () {
    it('should return 1100 for base 2', function () {
      expect(number.stringToValue('1100', 2)).to.equal(parseInt('1100', 2));
    });
    it('should return 1100 for base 10', function () {
      expect(number.stringToValue('1100', 10)).to.equal(1100);
    });
    it('should return 14 for base 8', function () {
      expect(number.stringToValue('1100', 8)).to.equal(parseInt('1100', 8));
    });
  });
});

