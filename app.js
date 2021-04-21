// const amount = 12

// if (amount < 10) {
// 	console.log('small number')
// } else {
// 	console.log('large number')
// }

// console.log(`hey it´s my first node app!!`)

// GLOBALS - NO WINDOW

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     – info about current moduule (file)
// process    - info abouut env where the program is being executed

// console.log(__dirname)
// setInterval(() => {
// 	console.log('hello world')
// }, 1000)

// CommonJS, every file is module (by  default)
// Modules - Encapsulated code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
// console.log(names)
const data = require('./6-alternative-flavor')
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
