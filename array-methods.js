/* 
	? Array Methods
	* method is a function
	* it lives on an object interface
	* in this instance, it's Array constructor
	* denoted by .nameOfMethod()
*/

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]

/* 
	? .push()
	* appends argument to the end of the array
	* returns new length of the array
*/

let pushReturn = months.push("Aug", "Sep", "Oct")
console.log(months, `push() return: ${pushReturn}`)

// why is this useful?

months[months.length] = "Nov"
console.log(months)

/* 
	? .pop()
	* removes last element from an array
	* returns said element
*/

let popReturn = months.pop()
console.log(months, `pop() return: ${popReturn}`)

/* 
	? .shift()
	* removes first element from an array
	* returns said element
*/

let shiftReturn = months.shift()
console.log(months, `shift() return: ${shiftReturn}`)

/* 
	? .unshift()
	* adds argument to the beginning of the array
	* returns new length of the array
*/

let unshiftReturn = months.unshift("2026")
months.unshift(shiftReturn)
console.log(months, `unshift() return: ${unshiftReturn}`)

/* 
	? Challenge
	* iterate through our array and clean it out
	* while you clear it out if the item is current month, console log it
	! SPICEY MODE: don't hardcode current month, figure out how to get it from somewhere in JS
*/

console.log("\nChallenge: clean out the months array\n")

let currentMonth = new Date().toLocaleDateString("en-US", { month: "short"})

let count = 0

while(months.length > 0)
{
	let month = months.shift()
    count++

	// if (month === "Oct") 
    // {
	// 	console.log(month)
	// }

	if (month === currentMonth) 
    {
		console.log(month, "index", count)
	}
}

console.log(months)

// ? Choosing the right loop: for of iterates over values; while keep doing until condition changes

console.log("---------------------------------------")

/* 
	? Advanced Array Methods
	* loop-like and they take callbacks amongst other things
	? Callback
	* a function we pass as an argument to another function by reference
	* we are not responsible for its invocation, the function we pass it to is
*/

/* 
	? .forEach()
	* fires a callback for every predicate
	* predicate is a fancy word for condition
	* does not return anything ever
	* it takes three parameters within its callback:
		* item
		* index
		* original array
		* all optional
*/

let usernames = ["paul_dev", "ngSquared", "adam__3", "RachelP"]

usernames.forEach((item, index, origArr) => {
	console.log(item, index, origArr)
})

/* 
	? Challenge
	* print a message `Loaded user: name of user`
	! SPICEY MODE: could you do it if I took away your item? (boilerplate below)
*/

// ? _ skips that specific argument requirement (not always possible)
// usernames.forEach((_, i, arr) => {
// 	console.log(i, arr)
// })

console.log("\nChallenge: print a message for each user\n")

usernames.forEach((user) =>
{
    console.log(`Loaded user: ${user}`)
})

usernames.forEach((_, i, arr) =>
{
    console.log(`Loaded user tricky: ${arr[i]}`)
})

// ? .forEach() does not return anything
let result1 = usernames.forEach((_, i, arr) =>
{
	return `Loaded user tricky: ${arr[i]}`
})
console.log(result1)

/* 
	? .map()
	* used for data transformation
	* utilizes a callback for its predicate
	* allows a return
*/

let profileURLs = usernames.map((usr) =>
{
	return `/users/${usr}`
})

console.log(profileURLs)

/* 
	? Challenge
	* generate email addresses from our usernames
	* return them to a new array called emails
	* ex: RachelP will become rachelp@gmail.com
*/

// ? no {} means it's an expression and return is implicit
// let emails = usernames.map((u) => `${u}@gmail.com`)

let emails = usernames.map((usr) =>
{
    return `${usr.toLowerCase()}@gmail.com`
})

console.log(emails)

/* 
	? filter()
	* returns based on predicate
	* tl;dr it searches for stuff
*/

let files = [
	"index.html",
	"app.js",
	"server.js",
	"styles.css",
	"auth.js",
	"database.js",
	"README.md",
];

let jsFiles = files.filter((file) => file.endsWith(".js"))

// ? Also anotheer way of writing it, but not as clean. "function" isnt necessary since we are using an arrow function.
// let jsFiles = files.filter(function (f) 
// {
// 	return f.endsWith(".js")
// });

console.log(jsFiles)

let commands = [
	"git status",
	"git add",
	"git commit",
	"npm install",
	"git push",
	"node app.js",
];

/* 
	? Challenge
	* filter only git commands
	* place them in a new variable called gitCommands
*/

let gitCommands = commands.filter(c => c.includes("git"))
console.log(gitCommands)

// function findGitCommands(cmd) 
// {
// 	return cmd.includes("git")
// }

/* 
	? pass by reference function call
	* we don't decide when function is invoked
	* fx where callback is passed is responsible for that
	* we only specify where the callback fx lives
*/

// let gitCommands = commands.filter(findGitCommands)
// console.log(gitCommands)

let whackyEmails = [
	"paul@test.com",
	"",
	"sarah@test.com",
	"",
	"mike@test.com"
]

/* 
	? Challenge
	* remove empty values
*/

let cleanEmails = whackyEmails.filter(email => email !== "")
console.log(cleanEmails)

// same as above but with a for of loop and push method. This is a more manual way of doing it, but it works the same.
// it is longer and more code, but it is a good way to understand how the filter method works under the hood.
let cleanEmailss = []
for (i of whackyEmails) 
{
	if (i !== "") 
    {
		cleanEmailss.push(i)
	}
}
console.log(cleanEmailss)

let dirtyUsernames = [
	"PAUL",
	"aDAM",
	"JACKson",
	"HAmza"
]

/* 
	? Normalize the capitalization
	* to a new array of course
	! Spicey - make it so it starts uppercase and rest is lowercase
*/

let normalizedUsernames = dirtyUsernames.map(user => user[0].toUpperCase() + user.slice(1).toLowerCase())
console.log(normalizedUsernames)

// another way ... just slightly different syntax. This is a more concise way of writing it, but it does the same thing as the above code.
// let normalizedUsernames = dirtyUsernames.map(n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())
// console.log(normalizedUsernames)

/* 
	? reduce()
	* helps calculate data
	* reducer and an accumulator
	* start value and current value added
	* takes previous, current, and initial values
*/

let responseTimes = [120, 85, 240, 110, 95]

let total = responseTimes.reduce((total, time) =>
{
	return total + time
}, 0)

console.log(total)