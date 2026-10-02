/* 
	? Data Types
	* JS has 10 data types
	* primitive
		* string
		* number
		* boolean
		* null
		* undefined
		* Not a Number (NaN)
	* reference
		* array (list)
		* object (dictionary)
		* map
		* set (tuple)
*/

/* 
	? Strings
	* just text
	* can wraped in "", '', or backticks `` (string interpolation)
	* strings are immutable (cannot be modified)
	* strings are indexable (can access indivdiual character)
*/

let fullName = "Kenny T";
console.log(fullName);

// can access index with []
// ! indexes start at zero (0)
console.log(fullName[2]);
console.log(fullName[7]); // index out of bounds (only throws undefined here)

// strings are immutable
fullName[0] = "P";
console.log(fullName);

// this doesn't mutate the string, it replaces string inside the variable
fullName = "Penny T";
console.log(fullName);

/* 
	? String Methods
	* .length (property)
	* .slice()
	* toUpperCase()
	* toLowerCase()
*/

console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.slice(2));

/* 
	? String Concatenation
	* process of building a big string from many sub strings
*/

let cohortName = "fullstack"
let cohortNumber = "12"

// ! NOT string concatenation - just multiple arguments passed into console log
console.log(cohortName, cohortNumber, fullName)
console.log(cohortName + " " + cohortNumber + " " + fullName)

let student1 = cohortName + " " + cohortNumber + " " + fullName
console.log(student1)

/* 
	? String Interpolation
	* just like concatenation, but different syntax
	* allows us to insert expressions directly into the string
	* syntax: backticks `${ yourExpressionHERE } your string here`
*/

let student1StringInterpolation = `Student: ${cohortName}-${cohortNumber} ${fullName}`
console.log(student1StringInterpolation)

/* 
	? Challenge
	* create several variables
	* firstName
	* lastName
	* street
	* city
	* post code
	* assign them all some values
	create a variable called signature
	* concatenate or interpolate all of the values into it
	! Spicey Mode - how would you have it console name, street, city + zip each on new line?
*/

let firstName = "Kenny"
let lastName = "T"
let street = "123 Nunyabizness St"
let city = "New York"
let postCode = "10101"

let signature = `signature: ${firstName} ${lastName}, ${street}, ${city}, ${postCode}`
console.log(signature)
signature = `signature: ${firstName} ${lastName}, \n${street}, \n${city}, \n${postCode}`
console.log(signature)

/* 
	? Numbers
	* any integer, float, decimal, blah blah numbers
*/

let age = 25
console.log(age)

let bac = 0.08
console.log(bac)

console.log(age + bac)

/* 
	? Checking Data Type
*/

console.log(typeof age, typeof signature)

/* 
	? Boolean
	* binary value
	* on off
	* yes no
	* 1 0
	* true false
	* JS has several falsey values
		* false
		* 0
		* undefined
		* null
		* "" (empty string)
		* NaN
*/

// ? How to check for a boolean value?

console.log(Boolean(NaN))
console.log(Boolean(""))
console.log(Boolean(" "))

// ! Booleans are important for decision making

/* 
	? Null or Undefined
	* null - nothing (placeholder)
	* undefined - we haven't got a clue, can be anything
*/

let certificateID = null

/* 
	? Operators
	* add +
	* substract -
	* divide /
	* power **
	* dot for float .
	* modulo %
		* remainder of long division
		* does the numerator fit into denominator?
		* if 0 it does, any other number gives you remainder
	* assignment = (read it as IS, not EQUAL)
	* comparison == (double)
	* strict comparison === (triple)
	* != not equal to
	* !== strict not equal to
*/

console.log(5 ** 5)
console.log(5 == 5)

/* 
	? Type Coercion
	* if it walks like a duck, and quacks like a duck...
	* duck typed programming language
	* JS will try to coerce data type if there's a mismatch
*/

console.log(2 + "2")
// JS takes the number 2 and turns it into a string
// it becomes string concatenation

console.log(5 == "5") // true because number 5 gets turned into a string

console.log(2 + true) // 3 becasue boolean of true is 1

console.log("stuff" + undefined) // turns undefined into string representation

// ! HAAALP!!! HOW DO I STOP THIS COERCION WITCHCRAFT?!?!?!?

// ? triple equals === checks for value AND data type

console.log(5 === "5")

console.log(2 !== "2")

/* 
	? Expression
	* two or more values resolved into one
	* used with operators
	* typically encapsulated within ()
*/