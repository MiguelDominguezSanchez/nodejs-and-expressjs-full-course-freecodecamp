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

/*
// CommonJS, every file is module (by  default)
// Modules - Encapsulated code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
// console.log(names)
const data = require('./6-alternative-flavor')
// console.log(data)
require('./7-mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
*/

/*min 5:49*/

/////////////////////////////////////////////////////////////////
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method retuns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMen: os.totalmem(),
	freeMen: os.freemem(),
}
console.log(currentOS)
