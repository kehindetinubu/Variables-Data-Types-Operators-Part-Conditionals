/* 
	? Arrays
	* collection of multiple items
	* like a list or a collection
	* we use [ ] to define it
	* data type agnostic
	* indexable
*/

// ? array literal creation
let myFirstArray = []

// ? prototypal creation
let mySecondArray = new Array()

console.log(myFirstArray, mySecondArray)

let countries = ["United States", "Canada", "England", "Poland", "Italy"]

console.log(countries)

// ? access using index
console.log(countries[2])

// ? what if i wanted the g from England?
console.log(countries[2][2])

// ? accessing index out of bounds?
console.log(countries[7])

// ? reassigning values
countries[2] = "United Kingdom"

console.log(countries)

// ? accessing length
console.log(countries.length)

let junkDrawerArray = ["string", 226, ["dog", "cat", "trex"], null, "potato", 56.6, NaN]
console.log(junkDrawerArray)

// ? how would you access the x in trex?
console.log(junkDrawerArray[2][2][3])

let cars = ["BMW", "Porsche", "Mercedes", "Pagani", "Aston Martin"]

/* 
	? Challenge
	* create a function called findIndex
	* it will take an array and search param parameters
	* iterate over the array
	* find where the item is
	* if found, return the index where found items is
	* if not found, return -1
	! Spicey Mode return item AND index AND search for substrings
*/

/*
function findIndex(array, searchParam)
{
    for(let i = 0; i < array.length; i++)
    {
        if (array[i] === searchParam)
        {
            return i;
        }
    }
    return -1;
}

findIndex(cars, "Pagani") // should return 3
console.log(findIndex(cars, "P"))
*/

/*
function findIndex(array, searchParam)
{
    console.log(array, searchParam)

    let matches = []

    for (i in array)
    {
        if (array[i].toLowerCase().includes(searchParam.toLowerCase()))
        {
            matches[matches.length] = [array[i], i]
        }
    }
    console.log(matches)
}

findIndex(cars, "p") // should return 1, 3, 4
*/

function findIndex(array, search)
{

	let matches = []

	for (i in array)
    {
		if (array[i].toLowerCase().includes(search.toLowerCase()))
        {
			matches[matches.length] = [arr[i], i]
		}
	}
	
	if (matches.length === 0)
    {
		return -1
	}

	return matches
}

console.log(findIndex(cars, "potato"))