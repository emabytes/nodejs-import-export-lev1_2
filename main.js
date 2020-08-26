const _ = require('lodash');
const data = require("./data")
const myFunctions = require("./functions")

console.log(myFunctions.returnFirstEl(data.numbersKey))

//with lodash
// console.log(_.head(data.numbersArrayKey))

console.log(myFunctions.removeLastEl(data.wordsKey))
//with lodash
// console.log(_.initial(data.numbersArrayKey))

console.log(myFunctions.returnLastEl(data.carsKey))
//with lodash
// console.log(_.last(data.numbersArrayKey));


console.log(myFunctions.removeFirstEl(data.playersKey))
//with lodash
// console.log(_.tail(data.numbersArrayKey));


console.log(myFunctions.positionN(data.playersKey, -2))
//with lodash
// console.log(_.nth(data.numbersArrayKey, 2));
// console.log(_.nth(data.numbersArrayKey, -2));


console.log(myFunctions.filterSpecificEl(data.someArrKey))
//with lodash
// console.log(_.pull(data.numbersArrayKey, 6, 4545));


//lodash
console.log(_.uniq(data.numbersKey))

console.log(_.sum(data.numbersKey));

console.log(_.random(22, 99));

console.log(_.capitalize('superman'));

console.log(_.toUpper('superman'));

console.log(_.endsWith('test', 'c'));
console.log(_.endsWith('test', 't'));





