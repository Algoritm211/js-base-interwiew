
const car = {
  carName: 'Rolls-Royce',
  logCar: function (color) {
    console.log(`Эта машина - ${color} ${this.carName}`)
  }
}

// car.logCar('черный') // Эта машина - черный Rolls-Royce

const porsche = {
  carName: 'Porsche'
}

// const logCarBoundPorsche = car.logCar.bind(porsche, 'красный')
// logCarBoundPorsche() // Эта машина - красный Porsche

// car.logCar.apply(porsche, ['красный']) // Эта машина - красный Porsche

// car.logCar.call(porsche, 'красный') // Эта машина - красный Porsche


function Person(name, age) {
  this.name = name
  this.age = age

  console.log(this)
}

// const sabrina = new Person('Sabrina', 42)
// Person { name: 'Sabrina', age: 42 }
// Данный объект instance класса Person, this выводит переданные аргументы

// Явный и неявный binding

// function logThis() {
//   console.log(this)
// }
//
// const obj = {name: 'Timur'}
// logThis.apply(obj) // { name: 'Timur' }
// logThis.call(obj) // { name: 'Timur' }
// logThis.bind(obj)() // { name: 'Timur' }


const cat = {
  legs: 4,
  logThis: function () {
    console.log(this)
  }
}


cat.logThis() // { legs: 4, logThis: [Function: logThis] }
// Получаем тот объект, в контексте которого был вызван данный метод