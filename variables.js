console.log("Hello World")

/* 
	? JavaScript (JS)
	* founded by Brandon Eich in 1995
	* runs in the browser, known as client-side
	* programming paradigms
		* functional
		* interpreted
		* object-oriented (kinda)
		* prototype-based language
	* imperative in instructions
*/

/* 
	? console.log()
	* log method on a console object
	* allows us to output into the terminal
	* when we run node somefile.js we create a process
	* process interprets the language and translates it into machine code for execution
*/

5+7
console.log(5+7)

/* 
	? Variable
	* building block of most programming languages
	* allows us to store data temporarily in memory
	* we can assign it, retrieve it, and modify it
	* analogy: think of a storage box
	* denoted by let, var, or const
	* can start with anything, but:
		* numbers
		* characters other than $ or _
*/

// variable example
// variable declaration
let exampleVariable
// let is a keyword
// exampleVariable is an identifier

console.log(exampleVariable) // undefined

// all variables have values
// if a value is not assigned, default is always undefined

// variable declaration + variable initilization
let cohortName = "fullstack-12"
console.log(cohortName)

// variables can be reassigned
exampleVariable = "i just reassigned the value"
console.log(exampleVariable)

/* 
	? JS runs top to bottom, left to right(*)
*/

// ? const - a variable which cannot be reinitialized
const myIP = "127.0.0.1"

// myIP = "12.222.24.24" // TypeError trying to reinitialize a const

console.log(myIP)

/* 
	? Variable Nomeclature
	
	* lowercase (anything)
	* snake-case (file names)
	* camelCase (variables)
	* PascalCase (classes, new object instances, etc)
	* UPPERCASE (for constants that don't change)
*/

