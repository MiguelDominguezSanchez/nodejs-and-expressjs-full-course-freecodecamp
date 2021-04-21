// const amount = 12

// const { version } = require('node:os')

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
// module     – info about current module (file)
// process    - info about env where the program is being executed

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

// method returns the system uptime in seconds
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
/*
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
*/

/////////////////////////////////////////////////////////////////
//////////////////* Http Module (Septup) *////////////////////////
/*
const http = require('http')

const server = http.createServer((req, res) => {
	// console.log(req)
	if (req.url === '/') {
		res.end('Welcome to our home page')
	}
	if (req.url === '/about') {
		res.end('Here is our short history')
	}
	res.end(`
    <h1>Oops!</h1>
    <p>We can´t seem to find the page you are looking for</p>
    <a href="/">back home</a>
`)
	// res.write('Welcome to our home page')
	// res.end()
})

server.listen(5000)
*/

/////////////////////////////////////////////////////////////////
//////////////////* NPM Command *////////////////////////

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency  - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by  step, press enter to skip)
// npm init -y (everything default)

/////////////////////////////////////////////////////////////////
//////////////////* First Package *////////////////////////

// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init - y (everything default)

/*
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('hello world')
*/

/////////////////////////////////////////////////////////////////
//////////////////* Event Loop Slides *////////////////////////

//////////////////* 1 *////////////////////////

/*
console.log('first task')
console.time()
for (let i = 0; i < 100000000; i++) {
    const h3 = document.querySelector('h3')
	h3.textContent = `Hey, everyone is waiting on me`
}
console.timeEnd()

console.log('next task')
*/

//////////////////* 2 *////////////////////////
/*
console.log('first task')
setTimeout(() => {
	console.log('second task')
}, 0)

console.log('next task')
*/

/////////////////////////////////////////////////////////////////
//////////////////* Event Loop Code Examples *////////////////////////

//////////////////* 1 Read File *////////////////////////

/*
const { readFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err)
		return
	}
	console.log(result)
	console.log('completed first task')
})
console.log('starting next task')
*/

//////////////////* 2 setTimeout *////////////////////////

/*
// started operating system process
console.log('first')
setTimeout(() => {
	console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process
*/

//////////////////* 3 setInterval *////////////////////////

/*
setInterval(() => {
	console.log('hello world')
}, 2000)
console.log('I will run first')
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error
*/

//////////////////* 4 server *////////////////////////

const http = require('http')

const server = http.createServer((erq, res) => {
	console.log('request event')
	res.end('Hello World')
})

server.listen(5000, () => {
	console.log('Server listening on port : 5000....')
})
