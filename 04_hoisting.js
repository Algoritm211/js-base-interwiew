
// console.log(sum(210, 1)) // 211
// // Все корректно отработает, хотя sum еще не определена
//
// function sum(a, b) {
//   return a + b
// }


// console.log(car) // undefined
// // undefined потому что интерпретатор знает,
// // что такая переменная есть,
// // однако пока что она не определена
//
// var car = 'Rolls-Royce'
// console.log(car) // Rolls-Royce

// console.log(name)
// // Получаем ошибку ReferenceError: Cannot access 'name' before initialization
// const name = 'Sasha'
// console.log(name)
//
// console.log(name)
// // Получаем ошибку ReferenceError: Cannot access 'name' before initialization
// const name = 'Sabrina'
// console.log(name)



// Function Expression and Function Declaration

// console.log(getSquareOfNum(12)) //144
//
// // Function Declaration
// function getSquareOfNum(num) {
//   return num ** 2
// }
//
// // Этот код будет работать

// НО


// console.log(getSquareOfNum(12))
// // Получаем ошибку ReferenceError: Cannot access 'getSquareOfNum' before initialization
//
// // Function Expression
// const getSquareOfNum = function(num) {
//   return num ** 2
// }
//
// // Этот код не будет работать
// // даже если объявить getSquareOfNum через var
// // И со стрелочными функциями не будет работать, это тоже Function Expression