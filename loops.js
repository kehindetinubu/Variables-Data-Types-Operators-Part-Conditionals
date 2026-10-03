/* 
	? Loops
	* allow us to run code repeatedly
	* they stop once a stop condition has been met
	* five ways of looping in JS (usually just two)
*/

/* 
	? For Loop
	* most popular
	* takes start, stop, step
		* start - placeholder
		* stop - the end of iterable
		* step - how many steps do we move per each iteration
	* iterator - a place in the loop
	* iterable - a value we can loop over
	
	? Syntax

	for (start; stop; step) {
		code block that runs for each iteration
	}
*/

for (let i = 0; i <= 5; i = i + 1)
{
	console.log(i)
}
console.log("---------------------------")

let alphabet = "the quick brown fox jumps over the lazy dog"
console.log("Length of alphabet", alphabet.length)

for (let i = 0; i <= alphabet.length - 1; i++)
{
	console.log(`Index: ${i} | Letter: ${alphabet[i]}`)
}

// this is because index starts at 0 and length starts at 1
console.log(alphabet[42], alphabet[43])
// ! example of an off-by-one error (a logic error)

/* 
	? FizzBuzz Challenge
	* loop from 0 - 100
	* check if the number is:
		* divisible by 3, log Fizz
		* divisible by 5, log Buzz
		* divisible by 3 & 5, log Fizz Buzz
		* not divisible by either? return the number
*/

for (let i = 0; i <= 100; i++)
{
    if (i % 3 === 0 && i % 5 === 0)
    {
        console.log("Fizz Buzz");
    }
    else if (i % 3 === 0)
    {
        console.log("Fizz");
    }
    else if (i % 5 === 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}

// ? Infinite Loop, has no stop condition that gets satisfied
// ? kill with ctrl + C a bunch

// for (let i = 0; i >= 0; i++) {
// 	console.log(i)
// }

/* 
	? For In Loop
	* iterates over iterable objects
	* has no start, stop, or step
*/

let carInsurance = "kraftfahrzeughafplifchtversicherung"

for (i in carInsurance) {
	console.log(`Index: ${i} | Value: ${carInsurance[i]}`)
}

let myName = "Paul Niemczyk"
let reversedName = ""

/* 
	? Challenge
	* reverse a string
	* HINT: if you speak my name out, you're going left to right
	* that's like looping over each letter, right?
	* could you mayyyybe loop backwards?
*/

for (let i = myName.length - 1; i >= 0; i--)
{
    console.log(myName[i])
}

for (i in myName)
{
	console.log("VALUE OF REVERSED NAME AT EACH ITERATION", myName[i], reversedName)
    reversedName = myName[i] + reversedName
	// console.log("VALUE OF REVERSED NAME AT EACH ITERATION", reversedName, myName[i])
}
console.log(reversedName)

/* 
	? For Of Loop
	* just like for in
	* doesn't give index
	* it gives the values
*/

let longWordPL = "konstantynopolitanczykowianeczka";
console.log(longWordPL.length)

/* 
	? Challenge
	* if I wanted to keep track of an index in a for of
	* how would i do it? could i do it?
*/

let index = 0;

for (i of longWordPL)
{
	console.log(i, index);
	index++;
	// same as
	// index = index + 1
	// index += 1
}

/* 
	? While Loop
	* continue statement as expression
	* while (true) { do stuff in the code block }
	* expression going false is the stop condition
*/

let count = 0

// while (count <= 10) 
//{
// 	console.log(count)
// 	count += 1
// }

/* 
	? Do While
	* i hate it
	* don't ask me to explain it
	* Jackson has a mug with it on
	* Imma smash it
	
	* guaranteed to run once prior to checking constraint
*/

do
{
	console.log("this does stuff", count, "times")
	count += 1
} while (count <= 10)



console.log(longWordPL)
/* 
	? Challenge
	* count the vowels in longWordPL (a, e, i, o, u)
	* each time you encounter a vowel, store it
	* once counting is done, log the total number of vowels
	! Spicey Mode
	* return a longWordPL missing all of its vowels
	* return a longWordPL with its vowels only
*/

let totalVowels = 0
let vowelLessWord = ""
let vowelsOnly = ""

for (i of longWordPL)
{
	let ltr = i.toLowerCase()
	if (ltr === "a" || ltr === "e" || ltr === "o" || ltr === "u" || ltr === "i")
	{
		totalVowels++
		vowelsOnly += ltr
	}
	else
	{
		vowelLessWord += ltr
	}
}

console.log(totalVowels, vowelLessWord, vowelsOnly)

/* 
	? Palindrome Checker
	* palindrome is a word spelled out the same way forward and backward
	* racecar is a palindrome
	* return true/false if a word is a palindrome
*/

let car = "racvbcar"
let palindrome = ""

for (i in car)
{
	palindrome = car[i] + palindrome;
}
console.log(palindrome)

if (car === palindrome)
{
	console.log(true)
} else
{
	console.log(false)
}

/* 
	? Palindrome in loop
	* character forward must be same as character backwards
*/

let isPalindrome = true
for (let i in car)
{
	console.log(car[i], car[car.length - 1 - i])
	if (car[i] !== car[car.length - 1 - i])
	{
		isPalindrome = false
		// ? break allows you to exit out of the loop early
		break
	}
}
console.log(isPalindrome)