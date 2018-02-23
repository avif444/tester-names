import { expect } from 'chai';
import testerNames from './index';

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
    it('should return an array of random item if passed number', function() {
      var randomItem = testerNames.random(2);
      expect(randomItem).to.have.length(2);
      randomItem.forEach(function(item) {
        expect(testerNames.all).to.include(item);
      });
    });
  });
});