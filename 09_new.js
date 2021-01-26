// class Cat {
//   constructor(name, color) {
//     this.name = name
//     this.color = color
//   }
// }

// const cat = new Cat('gray', 'Мурзак')
// console.log(cat) // Cat { name: 'gray', color: 'Мурзак' }

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


// const cat = Cat()
// console.log(cat) // undefined
