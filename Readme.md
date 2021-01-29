# JavaScript Interview

Автор: Алексей Горбунов (@Alexey_Horbunov)

# Типы данных

В JavaScript есть 7 основных типов данных.

Это `null, undefined, boolean, number, string, object, symbol`

Для того, чтобы узнать тип данных нужно использовать оператор `typeof`

Далее показан пример, что выводит `typeof` на разные типы данных

(Вот тут также стоит отметить свое внимание на `typeof null`, `typeof NaN`, а также `typeof undefined * 1`)

```jsx
console.log(typeof 0) // number
console.log(typeof true) // boolean
console.log(typeof "I am JavaScript developer") // string
console.log(typeof Math) // object
console.log(typeof Symbol('JS and TS')) // symbol
console.log(typeof undefined) // undefined
console.log(typeof null) // object (!!!)
console.log(typeof function () {}) // function
console.log(typeof NaN) // number )))
console.log(1 / 0) // Infinity
console.log(undefined * 1) // NaN
```

На собеседованиях часто можно услышать вопрос о том, чем отличается undefined от null?

*Ответ*:

Undefined используется в том случае, если переменная не объявлена или была объявлена с  помощью ключевого слова `var` и в ней не содержится значения. Также функция, которая ничего не возвращает по умолчанию возвращает undefined.

Null же используется в том случае, если отсутсвует именно значение, то есть переменная объявлена, однако в ней нет никакого значения.

**Приведение типов**

```jsx
let car = 'Rolls-Royce'

if (car) {
  console.log(`I want to buy a ${car}`)
}

// I want to buy a Rolls-Royce
```

Такие типы данных как `' ', undefined, null, false, 0, NaN, false` приводятся к FALSE

Остальные типы данных приводятся к TRUE, да, да, даже `[]`

**Строки и числа**

Здесь в коде показаны примеры операций с числами и строками, а также к каким результатам они приводят:

```jsx
// Строки и числа

console.log(1 + '2') // string, 12
console.log('' + 1 + 0) // string, 10
console.log('' - 1 + 0) // number, -1
console.log('3' * '8') // number, 24
console.log(4 + 10 + 'px') // string 14px
console.log('px' + 5 + 10) // string, px510
console.log('42' - 40) // number, 2
console.log('42px' - 2) // number, NaN
console.log(null + 2) // number, 2
console.log(undefined + 42) // number, NaN
```

**== VS ===**

`==` сравнивает значение, но с приведением типов

`===` сравнивает по значению без приведения типов

Везде лучше использовать именно `===`

Привожу примеры, которые показывают работу `==` и `===` , а также преимущество `===`:

```jsx
console.log(2 == '2') // true
console.log(2 === '2') // false
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(false == '0') // true
console.log('0' == 0) // true
```

**Список неоднозначных сравнений, которые нужно запомнить:**

```jsx
console.log(false == '') // true
console.log(false == []) // true
console.log(false == {}) // false
console.log('' == 0) // true
console.log('' == []) // true
console.log('' == {}) // false
console.log(0 == []) // true
console.log(0 == {}) // false
console.log(0 == null) // false
```

# Значения и ссылки

Примитивные типы данных передаются как значения. Однако вычисляемые типы данных, как **массивы, объекты, функции** передают ссылку при создании новых переменных. Из-за этого могут возникать определенные мутации. Ниже показано как это работает:

```jsx
let a = 211
let b = a
b++
console.log('a', a)
console.log('b', b)
// a 211
// b 212

// ОДНАКО
let k = [1, 2, 3]
let m = k
m.push(4)
console.log('k', k)
console.log('m', m)
// k [ 1, 2, 3, 4 ]
// m [ 1, 2, 3, 4 ]
// При инициализации m была передана именно
// ссылка k, а не новый массив. По сути m и k содержат одно значение
// При изменении m меняется k
// Это можно исправить передавая клон массива, чтобы он не мутировал:

let k = [1, 2, 3]
let m = k.concat()
m.push(4)
console.log('k', k)
console.log('m', m)
// k [ 1, 2, 3 ]
// m [ 1, 2, 3, 4 ]
// Примечание: concat без параметров возвращает копию массива, 
// [документация](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) по методу 

// Стоит отметить, что
let k = [1, 2, 3]
let m = k
m.push(4)
let c = [1, 2, 3, 4]
console.log(m === k) // true
console.log(m === c) // false, потому что m и k это один и тот же объект в памяти
// c - уже другой объект в памяти
```

# Scope (область видимости)

Scope говорит о доступности определенных переменных в функциях в коде.

Существует два понятия: глобальный scope, локальный scope.

Глобальный scope - когда переменные объявлены вне функции, но доступны внутри всех функций внутри scope (объект document или window в браузере)

Локальный scope - когда переменная доступна внутри функции

Scope указывает на доступность определенных элементов

Пример с областью видимости:

```jsx
function funcA() {
  let a = 1

  function funcB() {
    let b = 2

    function funcC() {
      let c = 3

      console.log('funcC:', a, b, c) // funcC: 1 2 3
    }

    funcC()
    console.log('funcB:', a, b) // funcB 1 2 , c уже недоступна
  }

  funcB()
  console.log('funcA:', a) // funcA: 1, b и c уже недоступны
}

funcA()

// funcC: 1 2 3
// funcB: 1 2
// funcA: 1
```

# Hoisting (подъем)

Hoisting - это перемещение при интерпретации какого-либо `.js` файла некоторых объектов (к примеру, функций) в начало файла. Это дает возможность обращаться к объектам еще до того, как они были определены

Пример:

```jsx
console.log(sum(210, 1)) // 211
// Все корректно отработает, хотя sum еще не определена

function sum(a, b) {
  return a + b
}
```

Стоит отметить, что hoisting работает для переменных, объявленных через `var`(который в настоящее время лучше не использовать):

```jsx
console.log(car) // undefined
// undefined потому что интерпретатор знает,
// что такая переменная есть,
// однако пока что она не определена

var car = 'Rolls-Royce'
console.log(car) // Rolls-Royce
```

НО с `let` и `const` hoisting не работает:

```jsx
console.log(name)
// Получаем ошибку ReferenceError: Cannot access 'name' before initialization
const name = 'Sasha'
console.log(name)

console.log(name1)
// Получаем ошибку ReferenceError: Cannot access 'name1' before initialization
const name1 = 'Sabrina'
console.log(name1)
```

**Function Expression and Function Declaration**

Hoisting работает с Function Declaration

```jsx
console.log(getSquareOfNum(12)) //144

// Function Declaration
function getSquareOfNum(num) {
  return num ** 2
}

// Этот код будет работать
```

НО не работает с Function Expression

```jsx
console.log(getSquareOfNum(12))
// Получаем ошибку ReferenceError: Cannot access 'getSquareOfNum' before initialization

// Function Expression
const getSquareOfNum = function(num) {
  return num ** 2
}

// Этот код не будет работать
// даже если объявить getSquareOfNum через var
// И со стрелочными функциями не будет работать, это тоже Function Expression
```

# Let / Const

`let` позволяет создать переменные, которые потом можно изменить



```jsx
// Let

let a = 'variable a'
let b = 'variable b'

// {} создают новый Scope
console.log('a:', a) // variable a
console.log('b:', b) // variable b
{
  a = 'new variable a'
  let b = 'local variable b'
  console.log('scope a', a) // scope a new variable a
  console.log('scope b', b) // scope b local variable b

}

console.log('a:', a) // new variable a
console.log('b:', b) // variable b
```

`const` позволяет создавать константы, которые нельзя переопределить, но это работает только с примитивными типами данных

```jsx
const PORT = 3000

PORT = 5000
// Получаю ошибку TypeError: Assignment to constant variable.
```

Мы можем изменять определенный массив или объект, однако не переопределять его

```jsx
const array = ['Rolls-Royce', 'JS']
array.push('Money') // изменяем массив, добавляя элемент
console.log(array) // [ 'Rolls-Royce', 'JS', 'Money' ]

array = [1, 2, 3]
// Получаю ошибку TypeError: Assignment to constant variable.

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
```

# Closures (замыкания)

Замыкание - момент, когда функция имеет доступ к переменным из вышестоящей области видимости.

Пример:

```jsx
function sayHaveANiceDayTo(name) {
  const message = `Have a nice day, ${name}`

  return function () {
    // функция имеет доступ к message через область видимости
    console.log(message)
  }
}

const haveANiceDayToRolls = sayHaveANiceDayTo('Rolls-Royce')
const haveANiceDayToElya = sayHaveANiceDayTo('Elya')
//haveANiceDayToRolls и haveANiceDayToElya - функции для пожелания хорошего дня
// Вызываем функции без параметров, но
// через замыкания они получили нужный параметр
haveANiceDayToRolls() // Have a nice day, Rolls-Royce
haveANiceDayToElya() // Have a nice day, Elya
```

Практическое применение:

Допустим, у нас есть менеджер для добавления каких-то товаров в корзину, а также получения информации о том, какие товары уже в корзине. Создаем функцию, в которой будет список товаров, функция будет возвращать объект с двумя методами, которые позволят добавлять и смотреть товары в корзине, которая была определена в функции. Реализуем:

```jsx
function createProductsManager () {
  const products = ['Milk', 'Bread']

  return {
    getProducts() {
      console.log(products)
    },
    addProduct(product) {
      products.push(product)
    }
  }
}

const manager = createProductsManager()
console.log(manager)
// {
//   getProducts: [Function: getProducts],
//   addProduct: [Function: addProduct]
// }

manager.getProducts() // [ 'Milk', 'Bread' ]
manager.addProduct('Apple') // добавляем продукт
manager.getProducts() // получаем [ 'Milk', 'Bread', 'Apple' ]
```

Получается, что мы можем написать функцию, где скроем все нужные переменные, массивы с данными и т.д. Далее можем создать объект manager через вызов функции и работать с этими данными через созданные методы, которые будут иметь доступ к данным функции через *замыкание.*

Пример вопроса с собеседования с замыканиями и setTimeout

Дан массив чисел, нужно через определенную задержку вывести все данные числа. Есть код, который это делает, но делает неверно. Нужно объяснить почему так происходит.

```jsx
const numbers = [1, 1, 2, 3, 5, 8, 13]

for (var i = 0; i < numbers.length; i++) {
  setTimeout(function () {
    console.log(`numbers[${i}] - ${numbers[i]}`)
  }, 1500)
}

// Выводится такое:
// numbers[7] - undefined
// numbers[7] - undefined
// numbers[7] - undefined
// numbers[7] - undefined
// numbers[7] - undefined
// numbers[7] - undefined
// numbers[7] - undefined
```

*Ответ:*

Один раз всего лишь создается переменная `i` , далее она просто изменяется. Цикл for отрабатывает быстро (быстрее setTimeout), и когда цикл прошелся по всему массиву и зашел на следующую итерацию, то `i` стала 7(максимальный индекс в данном примере 6), седьмого индекса нет, поэтому цикл прекращает работу, однако переменная так и остается в значении 7. После этого отрабатывает setTimeout и пытается обратиться к седьмому индексу, ведь он получил это из замыкания. И выводит undefined потому что элемента по этому индексу нет.

Как поменять это поведение?

Сменить `var` на `let` :  `for (let i = 0; i < numbers.length; i++)...` , потому что let существует в блочной области видимости и на каждой итерации создается новая переменная.

Но может быть такая ситуация, что нельзя использовать ES6 синтаксис, в котором было введено объявление переменной с помощью `let`

Как решить без изменения `var` на `let` ?

Используем *замыкания.* Можем замкнуть `setTimeout`, обернув его в функцию, которую сразу будем вызывать. Через замыкание передаем `i` в каждую функцию. Значения замыкаются в каждой итерации цикла, получаем правильный ответ:

```jsx
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
```

P.S. Если немного непонятна сама конструкция, смотри следующую главу

# IIFE (Immediate Invoked Function Expression)(Моментально выполняемое функциональное выражение)

Идея - мы можем создавать определенные функции, которые будут моментально вызваны, зачастую используются для создания локального scope (как в решении последнего задания предыдущей главы).

Допустим, что мы хотим создать массив функций, которые будут выводить индекс по которому находится данная функция в массиве и код. Нужно сделать правильное поведение без использования `let`

```jsx
const result = []

for (var i = 0; i < 5; i++) {
  result.push(function () {
    console.log(i)
  })
}

result[1]() // получаем 5, должен быть 1
result[2]() // получаем 5, должно быть 2
```

*Ответ:*

Создаем копию `i` используя IIFE, создаем функцию, которая вызывается немедленно при каждой итерации цикла, копируем значение `i` в переменную `j` и заносим функцию в массив с уже скопированным значением. То есть создается scope, в который копируется промежуточное значение `i` , функция далее будет работать с созданной правильно локальной переменной `j` .

Получаем такой код:

```jsx
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
```

# Context

Иногда контекст путается с таким понятием как Scope (область видимости), однако это на самом деле разные вещи.

Scope указывает на видимость определенных переменных

Контекст определяет как функция была вызвана, постоянно указывает на ключевое слово this в текущем участке кода

Допустим, у нас есть объект `car` , который имеет изначальное установленное поле `carName`, а также функцию `logCar` , которая принимает цвет машины и выводит информацию о ней

```jsx
const car = {
  carName: 'Rolls-Royce',
  logCar: function (color) {
    console.log(`Эта машина - ${color} ${this.carName}`)
  }
}

car.logCar('черный') // Эта машина - черный Rolls-Royce
```

Как мы видим, `this.carName` указывает на поле `carName` объекта, в котором находится функция, значение `this` привязано к этому объекту.

Но далее у нас появляется объект `porsche` , который также имеет `carName` , также мы хотим вызвать этот объект, передать цвет и получить информацию об автомобиле в консоли. И мы можем это сделать, воспользовавшись функцией `logCar` , которая находится в объекте car и тут нам помогут три функции - `call`, `apply` и `bind`.

Для начала немного определений, а далее пойдет код

JavaScript метод `bind()` используется для создания новой функции на основе уже имеющейся, но с "жестко" заданным значением this и (или) предопределенным набором параметров, и принимает два аргумента:

- значение this;
- предопределенный набор параметров в виду REST-аргументов (необязательно).

И вот пример из нашего случая:

```jsx
const logCarBoundPorsche = car.logCar.bind(porsche, 'красный')
logCarBoundPorsche() // Эта машина - красный Porsche
```

Мы передали контекст объекта и нужный параметр. На выходе получили функцию, которая привязана именно к объекту `porsche`, а не к объекту `car`.  Стоит отметить, что `bind` не вызывает функцию, а возвращает новую функцию.

Метод `apply()` позволяет осуществить вызов функции с заданным значением this и массивом аргументов. Так, JavaScript apply() принимает два необязательных параметра:

- значение this;
- массив аргументов

```jsx
car.logCar.apply(porsche, ['красный']) // Эта машина - красный Porsche
```

Метод call() идентичен методу apply(), за исключением того, что apply() принимает массив аргументов, а call() - список аргументов. Так, call() принимает следующие параметры:

- значение this;
- REST-аргументы для вызываемой функции.

```jsx
car.logCar.call(porsche, 'красный') // Эта машина - красный Porsche
```

Далее если говорить про классы, то в ES5 синтаксисе они создавались через `function` , тоже может быть полезно посмотреть на следующий пример

```jsx
function Person(name, age) {
  this.name = name
  this.age = age

  console.log(this)
}

const sabrina = new Person('Sabrina', 42)
// Person { name: 'Sabrina', age: 42 }
// Данный объект instance класса Person, this выводит переданные аргументы
```

**Явный и неявный binding**

Явный binding это когда мы явно указываем с каким контекстом нужно вызывать функцию:

```jsx
function logThis() {
  console.log(this)
}

const obj = {name: 'Timur'}
logThis.apply(obj) // { name: 'Timur' }
logThis.call(obj) // { name: 'Timur' }
logThis.bind(obj)() // { name: 'Timur' }
```

Неявный binding:

```jsx
const cat = {
  legs: 4,
  logThis: function () {
    console.log(this)
  }
}

cat.logThis() // { legs: 4, logThis: [Function: logThis] }
// Получаем тот объект, в контексте которого был вызван данный метод
```

Стоит отметить, что стрелочные функции не содержат собственный контекст this, а используют значение this окружающего контекста.

# Как работает new

Тут мы создаем класс кота. Слово `new` создает инстанс класса, это можно увидеть на таком примере:

```jsx
class Cat {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
}

const cat = new Cat('gray', 'Мурзак')
console.log(cat) // Cat { name: 'gray', color: 'Мурзак' }
```

Интересно, что мы можем создать свой собственный `new` . Создаем функцию `myNew` , принимаем конструктор и аргументы. Далее нужно вернуть объект. Далее с помощью `Object.setPrototypeOf` указываем для объекта прототип функции-конструктора. Воспользуемся `myNew` и получим тот же результат.

```jsx
function Cat(color, name) {
  this.color = color
  this.name = name
}

function myNew(constructor, ...args) {
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  return constructor.apply(obj, args) || obj
}

const cat = myNew(Cat,'gray', 'Мурзак')
console.log(cat) // Cat { color: 'gray', name: 'Мурзак' }
```

Обращаю внимание, что класс кота был создан через функцию, иначе код работать не будет.

Стоит отметить, что классы нельзя создавать без new. Вернее было бы правильно сказать, что можно, но не имеет смысла, ведь в переменной `cat` мы получим `undefined`

```jsx
const cat = Cat()
console.log(cat) // undefined
```

# Prototype

Каждый объект имеет свой прототип, который берется с родительского элемента, от которого был создан данный объект. Чтобы получить прототип, существует специальное ключевое слово`__proto__` , которое указывает на прототип класса или объекта от которого был создан объект. Ранее (ES5 и раньше) для доступа к прототипу использовалось `Object.getPrototypeOf()` .

Также существует второй контекст в котором мы говорим про прототип. Это прототип у различных функций, который служит для того, чтобы передавать эти свойства для объектов, которые создаются через ключевое слово new. Посмотрим на примере:

```jsx
function Car(name, color) {
  this.name = name
  this.color = color
} // Самый обычный класс на ES5 синтаксисе

Car.prototype.sound = function () {
  console.log(`${this.name} makes "VRRRROOOOOM"`)
}

const rolls = new Car('Rolls-Royce', 'black')
rolls.sound() // Rolls-Royce makes "VRRRROOOOOM"
// Как видим, rolls имеет метод sound
// Это сработало через прототип
```

Далее посмотрим на `Car.prototype`

```jsx
console.log(Car.prototype) // { sound: [Function (anonymous)] }
console.log(rolls) // Car { name: 'Rolls-Royce', color: 'black' }
```

В данном случае поле `prototype` является указателем на объект, у которого есть конструктор и соответствующие поля, которые будут добавлены для объектов, созданных от этого класса.

Когда мы вызываем метод `sound`, JavaScript смотрит на объект, не находит там `sound` , далее спускается в прототип объекта, находит там данный метод и вызывает.

Далее посмотрим на `rolls.__proto__` , сравним с `Car.prototype`

```jsx
console.log(rolls.__proto__) // { sound: [Function (anonymous)] }
console.log(rolls.__proto__ === Car.prototype) // true, один и тот же объект
```

Также мы можем посмотреть на `rolls.constructor` , это такой объект, который указывает на родительский класс `Car` :

```jsx
console.log(rolls.constructor) // [Function: Car]
```

Далее рассмотрим собственные свойства и свойства, которые доступны в прототипе

Создадим функцию-класс `Person` , через прототип зададим свойство `legs = 2`

```jsx
function Person() {

}

Person.prototype.legs = 2
Person.prototype.car = 'Имеется'

const person = new Person()

person.name = 'Алексей'
// Тут обращение именно к самому объекту, а не прототипу
// Далее проведем цепочку проверок, которые покажут
// как работает цепочка прототипов

console.log('car' in person) // true
console.log(person.legs) // 2
console.log(person.table) // undefined, потому что свойства table нет
console.log(person.name) // Алексей
```

Однако каким образом определить какие свойства есть в прототипе, а какие свойства являются собственными?

Для этого у объектов, которые имеют как родительский класс `Object` , за счет этого есть такое свойство как `hasOwnProperty()`

```jsx
console.log(person.hasOwnProperty('name')) // true
```

Тем не менее если спросим про свойство `person.legs` , то получим `false` из-за того, что `legs` находится именно в прототипе.

Также в тему о прототипах стоит упомянуть такой метод как `Object.create()` , который дает возможность создавать объекты, используя существующий прототип. Первым аргументом передается объект, который будет прототипом, вторым - параметры.

Посмотрим как он работает:

```jsx
const MyOwnProto = {cat: 'Murzich'}

const myCat = Object.create(MyOwnProto)

console.log(myCat.cat) // Murzich
console.log(myCat.hasOwnProperty('cat'))
// false, потому что не собственное свойство myCat, а прототипа (MyOwnProto)

console.log(myCat.__proto__ === MyOwnProto)
// true, myCat.__proto__ и MyOwnProto один и тот же объект
```

Однако тут есть одна особенность:

Если мы у прототипа изменим имя кота, то у объекта, который был создан он этого прототипа, также изменилось имя кота:

```jsx
MyOwnProto.cat = 'Барсик'

console.log(myCat.cat) // Барсик
```

Если мы в общем меняем объект прототипа, то у ранее созданных объектов ничего не поменяется:

```jsx
let MyOwnProto = {cat: 'Murzich'}

const myCat = Object.create(MyOwnProto)

MyOwnProto = {cat: 'Пушок'} // это абсолютно другой объект

console.log(myCat.cat) // Murzich
```

# Особенности асинхронности

JavaScript работает в одном потоке, это значит, что об асинхронности и речи быть не может, но в это же время JavaScript довольно хорошо справляется с различными асинхронными запросами на сервер, таймаутами и т.д. Все это стало возможно благодаря концепции event loop и особенностям работы call stack в JavaScript. Допустим, у нас есть несколько функций, которые просто будут выводить их номер в консоль:

```jsx
const first = () => console.log('first')
const second = () => console.log('second')
const third = () => console.log('third')

first()
second()
third()

// first
// second
// third
```

Вроде бы элементарный пример, но интересная особенность будет замечена, если мы вторую функцию обернем в `setTimeout` и захотим вызвать через 0 миллисекунд, то есть как бы сразу, но ответ будет может быть для некоторых неожиданным:

```jsx
const first = () => console.log('first')
const second = () => console.log('second')
const third = () => console.log('third')

first()
setTimeout(second, 0)
third()

// Получаем вот такой результат:
// first
// third
// second
```

А теперь главный вопрос: почему так?

*Ответ:*

Давайте пройдем по тому как это работает. Интерпретатор доходит до `first()` помещает ее в call stack, она выполняется и когда она завершается интерпретатор ее выбрасывает из call stack, потому что она уже отработала. Идем далее, интерпретатор видит `setTimeout`. JavaScript не знает про асинхронные операции, поэтому он закидывает функцию `setTimeout` с телом на сторонний API. После этого все выбрасывается из call stack, интерпретатор идет дальше и выполняет функцию `third()`, выбрасывает ее из call stack. В это время (пока выполнялась функция `third()`) сторонние API увидели, что `setTimeout` не имеет задержки, функция внутри `setTimeout` была помечена как нужная для выполнения и выполнилась. Именно поэтому функция `second` отработала последней

---

....На этом пока что все, конспект будет со временем дополняться)))

Со всеми вопросами и критикой обращаться к @Alexey_Horbunov (Telegram) или на почту - algoritm211@gmail.com

**Всем удачных собеседований))))**