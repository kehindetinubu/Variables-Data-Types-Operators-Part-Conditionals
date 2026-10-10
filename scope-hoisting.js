/* 
	? Scope & Hoisting
	* JS runs left to right, up and down

	? Scope
	* blocks of code which have different access rights
	* scope is { }
	* five types of scope
		* global
		* block
		* function
		* module
		* lexical
*/

/* 
	? Global Scope
	* window
	* file itself
*/

let globalScopeVariable = "This is a global scope variable"
console.log(globalScopeVariable)

if (true)
{
	console.log(globalScopeVariable)
}

/* 
	? Block Scope
	* contained within { }
*/

if (true)
{
	let blockScopeVariable = "This is a block scoped variable"
	console.log(blockScopeVariable)
}

// console.log(blockScopeVariable) // ReferenceError scoped to block and accessed from global

/* 
	? Function Scope
	* contained within function's { }
*/

function functionScopedFunction()
{
	let functionScopeVariable = "This is a function scope variable"
	console.log(functionScopeVariable)
}

functionScopedFunction()

// console.log(functionScopeVariable) // ReferenceError can only access in fx scope

/* 
	? Module Scope
	* related to the files themselves
	* contained within the file
	* needs to be exported and imported to be used
*/

// ? Separation of Concerns
const greetStudents = require("./greetStudents")

console.log(greetStudents("Nikkie", "fullstack-12"))

/* 
	? CommonJS vs ESModule Import/Export
	* module.exports | file = require("file path") for the import
	* export default nameOfContentYoureExporting | import nameOfContent from "file path here" (Newer Way)
*/

/* 
	? Lexical Scope
	* also called a closure
	* outer has access to inner
	* only within a function
*/

function outer()
{
	let outerFxScopeVar = "Outer Variable";
	console.log(outerFxScopeVar);

	function inner()
    {
		let innerFxScopeVar = "Inner Variable";
		console.log(outerFxScopeVar);

		return innerFxScopeVar;
	}
	// console.log(innerFxScopeVar) // ReferenceError

	let accessToInnerFxScopeVar = inner() // Outer gives access to Inner thru Closure
	console.log("HERE", accessToInnerFxScopeVar)
}

console.log(outer());

{
	{
		{
			{
				{
					{
						{
							{
								console.log("Whole lotta scope");
							}
						}
					}
				}
			}
		}
	}
}

console.log("------------------------------")

/* 
	? Hoisting
	* buckle up buttercup, it's about ot get bumpy
	* left right up down is a lie... Paul's a liar... go figure
	* JS runs your code twice 
    * first pass, it takes any declarations and hoists them up into memory
	* it only hoists declarations, not initilizations
	* happens to VARiables, and function declarations
*/


// console.log(myName) // ReferenceError - trying to access before definition
let myName = "Paul"
console.log(myName)

console.log(surname)
var surname = "Niemczyk"
// ! this is bad ! don't use it to your advantage


function test()
{
	console.log("This is a test")
}
test() // also runs because, well, it's top to bottom


// fxExpression() // ReferenceError - NOT hoisted
let fxExpression = function()
{
	console.log("This is a fx expression test")
}

fxExpression()

console.log("--------------------------")

function run()
{
	var foo = "foo"
	let bar = "bar"
	console.log(foo, bar)
	
	{
		var moo = "moo"
		let baz = "baz"
		console.log(moo, baz)
		console.log("from the top", foo, bar)
	}

	console.log(moo)
	// ? works: var is scoped to immediate function, not immediate block
}

run();

{
	{
		var someVarHighUpInMountains = "I'm on Mt Everest motherf...."
	}
}

console.log(someVarHighUpInMountains)
// ? works: because global scope is actually a function...
