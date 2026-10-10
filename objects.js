/* 
	? Objects
	* reference data type
	* denoted by { }
	* unlike array, no indexes
	* has keys or properties and values
	* they are key: value,
	* properties are denoted by . (ex: .length)
	* has methods denoted by () (ex: .toUpperCase())
	* has .this keyword
	* used for when data has to be recalled by some name
*/

// ? Object literal
let obj = {}
console.log(Boolean(obj), obj, obj.length)

let bentley = 
{
	// property: value
	// key: value
	species: "dog",
	color: "black and white",
	name: "Bentley",
	spayedNeutered: true,
	breed: "olde english bulldoggee",
	weight: 78,
	favoriteActivities: ["farting", "eating", "sleeping"]
}

// ? Accessing a property
console.log(bentley.name)

// ? Accessing property using array notation
console.log(bentley["breed"])

// ? Not Indexable
console.log(bentley[1])

// ? Assigning property
bentley.owner = "Paul"

console.log(bentley)

// ? Reassigning property
bentley.name = "Sausage"
console.log(bentley)

// ? For of vs For in

// ? works and returns keys
for (i in bentley)
{
	console.log(bentley)
}

// ? Error - not iterable
// for (i of bentley)
// {
// 	console.log(i)
// }

/* 
	? Object Interface Methods
	* .keys()
	* .values()
*/
let keys = Object.keys(bentley)
console.log(keys, keys.length)

let values = Object.values(bentley)
console.log(values)

let POSTrequest = {
	email: "paul@codecademy.com",
	password: "dbLocal"
}

let db = [
	{ email: "jackson@gmail.com", password: "pass1234"},
	{ email: "paul@gmail.com", password: "ilovepizza777"},
	{ email: "hamza@gmail.com", password: "alialiali"},
	{ email: "nader@gmail.com", password: "laskjflk9834834"},
	{ email: "rachel@gmail.com", password: "superCool22"},
	{ email: "andrew@gmail.com", password: "pikeFIsH90"},
]

/* 
	? Challenge

	* log the password from my request
	* how would you console log all emails in the database?

	* create an authentication service
	* it should take an incoming request and parse it
	* it needs to check if individual exists
	* if they don't, log "No user found"
	* if they do, check their password
	* if the passwords do not match, log "Incorrect password"
	* if the passwords do match, log "Logged in"
	
	! Spicey Mode
	* not everyone writes their email lowercase or without spaces
	* be able to handle request with leading or trailing spaces
	* differentiate between wrong email and no email value provdied and log an error
	* do the same for password before you even verify the passwords exist
	* what you're doing are separate functions, modularize it into different functions
	
	! Super Spicey Mode
	* create a function called register and login
	* register will allow you to add a new user to the database
		* ensure you follow spicey mode constraints (spaces, capitalization, etc.)
	* login will just take above and allow you to login
	* ensure that if a user with same email already exists, you do not add them
	* log that "this account already exists"
*/

console.log("\n***CHALLENGE***\n")

console.log(POSTrequest.password)

let dbEmailsOnly = db.map(user => user.email)
console.log(dbEmailsOnly)

let incomingRequest = {
    email: "something@gmail.com",
    password: "something"
}

/*
? Attempt with Navid
// let matchingUser = db.find(user => user.email === incomingRequest.email))
// let authenticate = ((incomingRequest) =>
// {
//     let matchingUser = db.find(user => 
//     {
//         if (user.email === incomingRequest.email)
//         {
//             console.log("user found")
//         }
//         else
//         {
//             console.log("user not found")
//         }
//     }
// })

db.forEach(user => console.log(user.email))

function findUser(email)
{
    // return db.find(user => user.email === email)
    if (db.find(user => user.email === email))
    {
        return db.find(user => user.email === email)
    }
    return "user not found"
}

function checkPassword(email, password)
{
    if (db.find(user => user.password === password))
    {
        return "Logged in"
    }
    return "Incorrect password"
}

function authenticate(incomingRequest)
{
    let userEmail = findUser(incomingRequest.email)
    if (userEmail)
    {
        checkPassword(incomingRequest.email, incomingRequest.password)
    }
}

let user = findUser("pauly@gmail.com")
let user2 = checkPassword("paul@gmail.com", "ilovepizza7772")

// console.log(user)
console.log(user2)

console.log(authenticate(incomingRequest))
*/

let user = db.find(user => user.email === incomingRequest.email)

if (!user)
{
	console.log("No user found")
}
else if (user.password != incomingRequest.password)
{
	console.log("Incorrect password")
}
else
{
	console.log("Logged in")
}

// # PAUL'S SOLUTION 
console.log("\n- - - - PAUL'S SOLUTIION - - - -\n")

console.log(POSTrequest.password)

db.forEach(i => console.log(i.email))

/* 
	? Guard Clauses
	* think about the negative scenario
	* use early returns (return or return false) to short
*/

function authenticate(req, db)
{
	// let foundUser = db.filter(usr => usr.email === req.email) ? can be used
	let foundUser = db.find(usr => usr.email === req.email)
	console.log(foundUser)

	// if (!foundUser.length) ? Used with .filter
	if (!foundUser)
	{
		console.log("User not found")
		return
	}

	if (foundUser[0].password !== req.password)
	{
		console.log("Incorrect password")
		return
	}

	console.log("Logged in")

}

authenticate(POSTrequest, db)

// ? Explaining use of .length to bypass use of boolean
// console.log(Boolean([]), Boolean(["stuff"]), Boolean(""), Boolean(" "))

function validateEmail(email) {
	if (typeof email !== "string" || email.trim() === "") {
		console.log("Email required")
		return
	}

	let normalizedEmail = email.trim().toLowerCase()

	return normalizedEmail
}

function validatePassword(password) {
	if (typeof password !== "string" || password.trim() === "") {
		console.log("Password required")
		return
	}

	return password
}

function findUserByEmail(email) {
	return db.find((usr) => usr.email.trim().toLowerCase() === email)
}

function login(req) {
	let email = validateEmail(req.email)
	let password = validatePassword(req.password)

	if (!email && !password) {
		return
	}

	let user = findUserByEmail(email)
	console.log(user)

	if (!user) {
		console.log("User Not Found")
		return
	}

	console.log("Logged in")
}

login(POSTrequest)

function register(req) {
	let email = validateEmail(req.email)
	let password = validatePassword(req.password)
	
	if (!email && !password) {
		return
	}
	
	let user = findUserByEmail(email)
	
	if (user) {
		console.log("User already exists")
		return
	}
	
	db.push({ email, password })
	console.log("Account created")
}

register(POSTrequest)
console.log(db)



