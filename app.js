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

/*
const http = require('http')

const server = http.createServer((erq, res) => {
	console.log('request event')
	res.end('Hello World')
})

server.listen(5000, () => {
	console.log('Server listening on port : 5000....')
})
*/

//////////////////* Async Patterns *////////////////////////

/*
const http = require('http')

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Home Page')
	}
	if (req.url === '/about') {
		// BLOCKING CODE !!!!
		for (let i = 0; i < 1000; i++) {
			for (let j = 0; j < 1000; j++) {
				console.log(`${i} ${j}`)
			}
		}
		res.end('About Page')
	}
	res.end('Error Page')
})

server.listen(5000, () => {
	console.log('Server Listening on port 5000...')
})
*/

//////////////////* *////////////////////////
/*
const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
	try {
		const first = await readFile('./content/first.txt', 'utf8')
		const second = await readFile('./content/second.txt', 'utf8')
		await writeFilePromise(
			'./content/result-mind-grenade.txt',
			`THIS IS AWESOME : ${first} ${second}`,
			{ flag: 'a' }
		)
		console.log(first, second)
	} catch (error) {
		console.log(error)
	}
}

start()

// const getText = (path) => {
// 	return new Promise((resolve, reject) => {
// 		readFile(path, 'utf8', (err, data) => {
// 			if (err) {
// 				reject(err)
// 			} else {
// 				resolve(data)
// 			}
// 		})
// 	})
// }
// getText('./content/first.txt')
// 	.then((result) => console.log(result))
// 	.catch((err) => console.log(err))
*/

//////////////////* Events Emitters *////////////////////////

/*
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
	console.log(`data received ${name} with id.${id}`)
})
customEmitter.on('response', () => {
	console.log(`some other logic here `)
})
customEmitter.emit('response', 'john', 34)
*/

//////////////////* Streams - Read file *////////////////////////

const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {
	highWaterMark: 90000,
	// encoding: 'utf8',
})

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

stream.on('data', (result) => {
	console.log(result)
})
stream.on('error', (err) => console.log(err))

//////////////////* Streams - Additional Info *////////////////////////
//////////////////* Streams - Http Example *////////////////////////
//////////////////* End Of Node Tutorial Module *////////////////////////
//////////////////* HTTP Request/Response Cycle *////////////////////////
//////////////////* Http Messages *////////////////////////
//////////////////* Starter Project Install *////////////////////////
//////////////////* Starter Overview *////////////////////////
//////////////////* Http Basics *////////////////////////
//////////////////* Http - Headers *////////////////////////
//////////////////* Http - Request Object *////////////////////////
//////////////////* Http - Html File *////////////////////////
//////////////////* Http App Example *////////////////////////
//////////////////* Express Info *////////////////////////
//////////////////* Express Basics *////////////////////////
//////////////////* Express - App Example *////////////////////////
//////////////////* Express - All Static *////////////////////////
//////////////////* API vs SSR *////////////////////////
//////////////////* JSON Basics *////////////////////////
//////////////////* Params, Query String - Setup *////////////////////////
//////////////////* Route Params *////////////////////////
//////////////////* Params - Extra Info *////////////////////////
//////////////////* Query String *////////////////////////
//////////////////* Additional Params And Query String Info *////////////////////////
//////////////////* Middleware  - Setup *////////////////////////
//////////////////* APP.USE *////////////////////////
//////////////////* Multiple Middleware Functions *////////////////////////
//////////////////* Additional Middleware Info *////////////////////////
//////////////////* Methods - GET *////////////////////////
//////////////////* Methods - POST *////////////////////////
//////////////////* Methods - POST (Form Example) *////////////////////////
//////////////////* Methods - POST (Javascript Example) *////////////////////////
//////////////////* Install Postman *////////////////////////
//////////////////* Methods - PUT *////////////////////////
//////////////////* Methods - DELETE *////////////////////////
//////////////////* Express Router - Setup  *////////////////////////
//////////////////* Express Router - Controllers *////////////////////////
