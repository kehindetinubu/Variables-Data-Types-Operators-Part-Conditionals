/* 
	? Logic & Conditionals
	* conditionals allow us to check for a... condition
	* it always resolves to a truthy value
	* this condition is called an expression
	* we can chain multiple conditions using logic gates
	* if a condition isn't truthy, it will be skipped
	* if we have multiple chained conditions, once one is met, we leave
*/

/* 
	? If Conditional
	* syntax:
	* if (expression) { code block where we do something }
*/

let temp = 36;

// expression true, we execute code block
if (temp > 30) {
	console.log("Summer weather");
}

// expression false, we don't execude code block
if (temp < 20) {
	console.log("Autumn weather");
}

/* 
	? Else Conditional
	* chains a fallback if expression fails
	* useful for when we cannot predict another expression
*/

/* 
	? Else If Conditional
	* allows to check for another explicit expression
	* else must always be last in the chain
*/

let tempScale = "C";

if (tempScale === "F") {
	console.log("Fahrenheit");
} else if (tempScale === "C") {
	console.log("Celsius");
} else {
	console.log(`The value is ${tempScale}`);
}

temp = 10;

/* 
	? Why should we chain? Can't I just throw bunch of ifs?
	* example of a logic error
*/

if (temp > 30) {
	console.log("Hot");
}

if (temp < 25) {
	console.log("Pleasant");
}

if (temp < 20) {
	console.log("Cooling off");
}

if (temp < 15) {
	console.log("Winter is coming");
}

/* 
	? Logic Operators
	* used to consolidate multiple expressions into one
	* in the order of importance/execution
	* NOT
		* denoted by != or !==
		* flips the expression
	* AND
		* denoted by &&
		* both sides must be true for whole expression to be true
	* OR
		* denoted by ||
		* either side must be true for whole express to be true
*/

temp = 35;
tempScale = "F";

if (tempScale === "C" && temp >= 30) {
	console.log("hot summer day");
} else if (tempScale === "F" && temp >= 30) {
	console.log("winter is here");
}

/* 
	? Challenge
	* create age variable and give it a number
	* use conditionals to determine ticket price
	* age under 13, log Ticket Price: $8
	* age 13 - 64, log Ticket Price: $12
	* age 65 and older, log Ticket Price: $7
	! Spicey Mode - what if I put potato as price? or null? or 124
	! Spice Mode 2 - could you simplify your logic?
*/

let age = 10

if (typeof age !== "number") {
  console.log("Please enter a number")
} else if (age < 13) {
  console.log("Ticket price: $8")
} else if (age <= 64) {
  console.log("Ticket price: $12")
} else if (age >= 115) {
	console.log("you sure about that?")
} else {
  console.log("Ticket price: $7")
}

/* 
	? Ternaries
	* a different way of writing conditionals
	* expression based (no return)
	* always need an else, no exceptions
	* commonly used for quick checks
	
	? Syntax: conditional ? truthy code block : falsey code block
*/

let f1Team = "Sauber"

if (f1Team === "Petronas") {
	console.log("Toto Wolff")
}

f1Team === "Petronas" ? console.log("Toto Wolff") : null