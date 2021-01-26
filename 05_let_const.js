// // Let
//
// let a = 'variable a'
// let b = 'variable b'
//
// // {} создают новый Scope
// console.log('a:', a) // variable a
// console.log('b:', b) // variable b
// {
//   a = 'new variable a'
//   let b = 'local variable b'
//   console.log('scope a', a) // scope a new variable a
//   console.log('scope b', b) // scope b local variable b
//
// }
//
// console.log('a:', a) // new variable a
// console.log('b:', b) // variable b


// const PORT = 3000
//
// PORT = 5000
// // Получаю ошибку TypeError: Assignment to constant variable.


// const array = ['Rolls-Royce', 'JS']
// array.push('Money') // изменяем массив, добавляя элемент
// console.log(array) // [ 'Rolls-Royce', 'JS', 'Money' ]
//

// array = [1, 2, 3]
// // Получаю ошибку TypeError: Assignment to constant variable.


const obj = {}

obj.name = 'Alexey'
obj.age = 19
obj.car = 'Rolls-Royce'
obj.sabrina = 'Sabrina'

console.log(obj)
// { name: 'Alexey', age: 19, car: 'Rolls-Royce', sabrina: 'Sabrina' }

obj.age = 18
console.log(obj)

// { name: 'Alexey', age: 18, car: 'Rolls-Royce', sabrina: 'Sabrina' }