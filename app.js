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
/*
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
*/
/////////////////////////////////////////////////////////////////
/*
const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
*/

/////////////////////////////////////////////////////////////////
//////////////////* Fs Module (Sync) *////////////////////////
/*
const { readFileSync, writeFileSync } = require('fs')
*/
/*
const fs = require('fs')
fs.read
*/
/*
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)

writeFileSync(
	'./content/result-sync.txt',
	`Here is the result : ${first}, ${second}`,
	{ flag: 'a' }
)
*/
/////////////////////////////////////////////////////////////////
//////////////////* Fs Module (Async) *////////////////////////
const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err)
		return
	}
	// console.log(result)
	const first = result
	readFile('./content/second.txt', 'utf8', (err, result) => {
		if (err) {
			console.log(err)
			return
		}
		const second = result
		writeFile(
			'./content/result-async.txt',
			`Here is the result : ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err)
					return
				}
				console.log(result)
			}
		)
	})
})
