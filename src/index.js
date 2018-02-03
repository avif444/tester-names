var uniqueRandomArray = require('unique-random-array');
var testerNames = require('./tester-names.json');

module.exports = {
  all: testerNames,
  random: uniqueRandomArray(testerNames)
}