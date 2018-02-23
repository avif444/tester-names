import uniqueRandomArray from 'unique-random-array'
import testerNames from './tester-names.json'

var getRandomItems = uniqueRandomArray(testerNames)

module.exports = {
  all: testerNames,
  random: random,
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