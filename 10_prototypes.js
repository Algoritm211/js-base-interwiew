// __proto__
//Object.getPrototypeOf()

function Car(name, color) {
  this.name = name
  this.color = color
} // Самый обычный класс на ES5 синтаксисе

Car.prototype.sound = function () {
  console.log(`${this.name} makes "VRRRROOOOOM"`)
}

const rolls = new Car('Rolls-Royce', 'black')
// rolls.sound() // Rolls-Royce makes "VRRRROOOOOM"
// Как видим, rolls имеет метод sound
// Это сработало через прототип

// console.log(Car.prototype) // { sound: [Function (anonymous)] }
// console.log(rolls) // Car { name: 'Rolls-Royce', color: 'black' }
// console.log(rolls.__proto__) // { sound: [Function (anonymous)] }
// console.log(rolls.__proto__ === Car.prototype) // true, один и тот же объект
// console.log(rolls.constructor) // [Function: Car]



// =========
function Person() {

}


Person.prototype.legs = 2
Person.prototype.car = 'Имеется'


const person = new Person()

person.name = 'Алексей'
// Тут обращение именно к самому объекту, а не прототипу
// Далее проведем цепочку проверок, которые покажут
// как работает цепочка прототипов

// console.log('car' in person) // true
// console.log(person.legs) // 2
// console.log(person.table) // undefined, потому что свойства table нет
// console.log(person.name) // Алексей

// console.log(person.hasOwnProperty('name')) // true
// console.log(person.hasOwnProperty('legs')) // false

// Object.create()

// const MyOwnProto = {cat: 'Murzich'}
//
// const myCat = Object.create(MyOwnProto)

// console.log(myCat.cat) // Murzich
// console.log(myCat.hasOwnProperty('cat'))
// // false, потому что не собственное свойство myCat, а прототипа (MyOwnProto)
//
// console.log(myCat.__proto__ === MyOwnProto)
// // true, myCat.__proto__ и MyOwnProto один и тот же объект

// MyOwnProto.cat = 'Барсик'
//
// console.log(myCat.cat) // Барсик

let MyOwnProto = {cat: 'Murzich'}

const myCat = Object.create(MyOwnProto)

MyOwnProto = {cat: 'Пушок'} // это абсолютно другой объект

console.log(myCat.cat) // Murzich

