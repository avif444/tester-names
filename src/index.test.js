var expect = require('chai').expect;
var testerNames = require('./index');

describe('tester-names', function() {
  describe('all', function() {
    it('should be an array string', function() {
      expect(testerNames.all).to.satisfy(isArrayOfString);

      function isArrayOfString(array) {
        return array.every(function(item) {
          return typeof item === 'string'
        });
      }
    });

    it('should contain "avif"', function() {
      expect(testerNames.all).to.include('avif')
    })
  });
  describe('random', function() {
    it('should return random item from testernames.all', function() {
      var randomItem = testerNames.random();
      expect(testerNames.all).to.include(randomItem)
    });
  });
});