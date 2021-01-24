

// null, undefined, boolean, string, number, object, symbol

// console.log(typeof 0) // number
// console.log(typeof true) // boolean
// console.log(typeof "I am JavaScript developer") // string
// console.log(typeof Math) // object
// console.log(typeof Symbol('JS and TS')) // symbol
// console.log(typeof undefined) // undefined
// console.log(typeof null) // object (!!!)
// console.log(typeof function () {}) // function
// console.log(typeof NaN) // number )))
// console.log(1 / 0) // Infinity
// console.log(undefined * 1) // NaN


// Приведение типов

// let car = 'Rolls-Royce'
//
// if (car) {
//   console.log(`I want to buy a ${car}`)
// }

// I want to buy a Rolls-Royce

// Строки и числа

// console.log(1 + '2') // string, 12
// console.log('' + 1 + 0) // string, 10
// console.log('' - 1 + 0) // number, -1
// console.log('3' * '8') // number, 24
// console.log(4 + 10 + 'px') // string 14px
// console.log('px' + 5 + 10) // string, px510
// console.log('42' - 40) // number, 2
// console.log('42px' - 2) // number, NaN
// console.log(null + 2) // number, 2
// console.log(undefined + 42) // number, NaN


// == vs ===
// console.log(2 == '2') // true
// console.log(2 === '2') // false
// console.log(undefined == null) // true
// console.log(undefined === null) // false
// console.log(false == '0') // true
// console.log('0' == 0) // true

//======

console.log(false == '') // true
console.log(false == []) // true
console.log(false == {}) // false
console.log('' == 0) // true
console.log('' == []) // true
console.log('' == {}) // false
console.log(0 == []) // true
console.log(0 == {}) // false
console.log(0 == null) // false
