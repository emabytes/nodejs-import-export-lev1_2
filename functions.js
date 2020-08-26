// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
function returnFirstEl(arr) {
    return arr[0]
}

// console.log(returnFirstEl(numbers)) //1


// const words = ["hi", "hello", "hey", "salut"]
function removeLastEl(arr) {
    return arr.slice(0, arr.length - 1)
}

// console.log(removeLastEl(words)) //[ 'hi', 'hello', 'hey' ]


// const cars = ["mercedes", "bmw", "audi"];
function returnLastEl(arr) {
    return arr.slice(arr.length - 1)
    // return arr[-1]
}

// console.log(returnLastEl(cars))
//audi


// const players = ["Modric", "Perisic", "Mandzukic", "Rakitic"];
function removeFirstEl(arr) {
    return arr.slice(1, arr.length)
}

// console.log(removeFirstEl(players));//"Perisic", "Mandzukic", "Rakitic"


function positionN(arr, index) {
    if (index < 0 || index > arr.length) {
        return arr.slice(arr.length - 1)
    }
}

function filterSpecificEl(arr) {
   return arr.filter(elem => elem !== "remove")
}

module.exports.returnFirstEl = returnFirstEl;
module.exports.removeLastEl = removeLastEl;
module.exports.returnLastEl = returnLastEl;
module.exports.removeFirstEl = removeFirstEl;
module.exports.positionN = positionN; 
module.exports.filterSpecificEl = filterSpecificEl;