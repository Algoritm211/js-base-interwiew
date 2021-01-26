
// Immediately Invoked Function Expression

// const result = []

// for (var i = 0; i < 5; i++) {
//   result.push(function () {
//     console.log(i)
//   })
// }
//
// result[1]() // получаем 5, должен быть 1
// result[2]() // получаем 5, должно быть 2

const result = []

for (var i = 0; i < 5; i++) {
  (function () {
    var j = i
    result.push(function () {
      console.log(j)
    })
  })()
}

result[1]() // получаем 1 как и должно быть
result[2]() // получаем 2 как и должно быть