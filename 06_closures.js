// function sayHaveANiceDayTo(name) {
//   const message = `Have a nice day, ${name}`
//
//   return function () {
//     // функция имеет доступ к message через область видимости
//     console.log(message)
//   }
// }
//
// const haveANiceDayToRolls = sayHaveANiceDayTo('Rolls-Royce')
// const haveANiceDayToElya = sayHaveANiceDayTo('Elya')
// //haveANiceDayToRolls и haveANiceDayToElya - функции для пожелания хорошего дня
// // Вызываем функции без параметров, но
// // через замыкания они получили нужный параметр
// haveANiceDayToRolls() // Have a nice day, Rolls-Royce
// haveANiceDayToElya() // Have a nice day, Elya

// Практическое применение:

// function createProductsManager () {
//   const products = ['Milk', 'Bread']
//
//   return {
//     getProducts() {
//       console.log(products)
//     },
//     addProduct(product) {
//       products.push(product)
//     }
//   }
// }
//
// const manager = createProductsManager()
// console.log(manager)
// // {
// //   getProducts: [Function: getProducts],
// //   addProduct: [Function: addProduct]
// // }
//
// manager.getProducts() // [ 'Milk', 'Bread' ]
// manager.addProduct('Apple') // добавляем продукт
// manager.getProducts() // получаем [ 'Milk', 'Bread', 'Apple' ]
//

// const numbers = [1, 1, 2, 3, 5, 8, 13]
//
// for (var i = 0; i < numbers.length; i++) {
//   setTimeout(function () {
//     console.log(`numbers[${i}] - ${numbers[i]}`)
//   }, 1500)
// }

// Выводится такое:
// numbers[7] - undefined
// numbers[7] - undefined
// numbers[7] - undefined
// numbers[7] - undefined
// numbers[7] - undefined
// numbers[7] - undefined
// numbers[7] - undefined

const numbers = [1, 1, 2, 3, 5, 8, 13]

for (let i = 0; i < numbers.length; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(`numbers[${i}] - ${numbers[i]}`)
    }, 1500)
  })(i)
}

// Получаем корректный результат:
// numbers[0] - 1
// numbers[1] - 1
// numbers[2] - 2
// numbers[3] - 3
// numbers[4] - 5
// numbers[5] - 8
// numbers[6] - 13
