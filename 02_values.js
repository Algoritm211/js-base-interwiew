
// let a = 211
// let b = a
// b++
// console.log('a', a)
// console.log('b', b)
// a 211
// b 212

// ОДНАКО
// let k = [1, 2, 3]
// let m = k
// m.push(4)
// console.log('k', k)
// console.log('m', m)
// k [ 1, 2, 3, 4 ]
// m [ 1, 2, 3, 4 ]
// При инициализации m была передана именно
// ссылка k, а не новый массив. По сути m и k содержат одно значение
// При изменении m меняется k
// Это можно исправить передавая клон массива, чтобы он не мутировал:

// let k = [1, 2, 3]
// let m = k.concat()
// m.push(4)
// console.log('k', k)
// console.log('m', m)
// k [ 1, 2, 3 ]
// m [ 1, 2, 3, 4 ]
// Примечание: concat без параметров возвращает копию массива, документация по методу:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat


// Стоит отметить, что
let k = [1, 2, 3]
let m = k
m.push(4)
let c = [1, 2, 3, 4]
console.log(m === k) // true
console.log(m === c) // false, потому что m и k это один и тот же объект в памяти
// c - уже другой объект в памяти