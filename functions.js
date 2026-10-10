/* 
	? Functions
	* reusable block of code
	* has none, one, or many inputs and only one output
	* performs some sort of computation inside
	* input windows are called parameters
	* inputs themselves are called arguments
	* output is the return of the function
	* functions need to be called or invoked in order to run
	* if no return is provided, it's default return value is undefined
*/

// ? Function Declaration (HOISTED)

function barebones()
{

}

// ? function invocation, means adding () at the end of it
console.log(barebones())

// ? String representation of an object
console.log(barebones)

// ? name - is a parameter
function cohortName(name)
{
	console.log(name)
}

// ? fullstack-12 - is the argument
cohortName("fullstack-12")

/* 
	! CONSOLE LOG IS NOT THE SAME AS RETURN !
	* console log is for us to see something
	* return provides you with a data value to consume
*/
let resultFromCohortName = cohortName("fullstack-12")
console.log(resultFromCohortName)

function greetPerson(name)
{
	return `Hello ${name}`
}

let greetingKenny = greetPerson("Kenny")
console.log(greetingKenny)

// ? Function Expression

let isVowel = function(ltr)
{
	// ? Guard Clauses - if we reach first return, we exit the function
    if(ltr === "a" || ltr === "e" || ltr === "i" || ltr === "o" || ltr === "u")
    {
		return true
	}

	// ? if first return hits, we will never reach this one
	return false
}

console.log(isVowel("p"))

/* 
	? Arrow Functions
	* concise body arrow function
		* it has no body
		* does not have explicit return
		* the expression works as a return
	* block body arrow function
		* has a body
		* has explicit return
		* does not bind to .this or super()
*/

let addNums = (num1, num2) => num1 + num2
console.log(addNums(5, 7))

let watermark = sig => `Property of ${sig}`
// ? if one parameter, doesn't need () around it

console.log(watermark("Paul"))

// ? Block Body Arrow Function

let calcSquareArea = (len, width) =>
{
	return len * width
}

console.log(calcSquareArea(5, 7))

/* 
	? Immediately Invoked Function Expressions (IIFE)
	* anonymous function
	* defined and invoked at the same time
	* used when needing to fire immediately
*/

(function(){ console.log("IIFE")}())

/* 
	? Challenge
	* create a function (any kind, dealer's choice)
	* name it passwordValidator
	* return true if it validates or false if it doesn't
	* the password must be at least 10 characters
	* must contain at least one capital letter
	* must contain at least one number
	* must contain at least one character
	* call it and pass two passwords to test: one bad, one good
*/

/*
function passwordValidator(password)
{
    if (password.length < 10)
    {
        return false
    }

    for ( char of password)
    {
        console.log(char)
		if (char >= "A" && char <= "Z")
        {
			console.log("capital", char)
		}
    }        
}
*/

function passwordValidator(password)
{
    // ? regex - regular expression
    // ? regex.test() - returns true or false if the regex matches the string
    // ? regex.exec() - returns an array of matches or null if no match
	let hasCapital = /[A-Z]/.test(password)
	let hasNumber = /[0-9]/.test(password)
	let hasSpecial = /[!@#$%^&*]/.test(password)
	console.log(hasCapital, hasNumber, hasSpecial)

	//return (pwd.length >= 10 && hasCapital && hasNumber && hasSpecial)
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/.test(password);

}

console.log(passwordValidator("laksdjfl792834HHH*"))