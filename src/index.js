var uniqueRandomArray = require('unique-random-array');
var testerNames = require('./tester-names.json');
var getRandomItems = uniqueRandomArray(testerNames)

module.exports = {
  all: testerNames,
  random: random,
  test: 'tester',
  addSome: 'addSome',
  addAnotherOne: 'addAnotherOne'
}

function random(number) {
  if (number === undefined) {
    return getRandomItems()
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItems());
    }
    return randomItems;
  }
}