/* 
	? Classes
	* part of Object Oriented Programming Paradigm (OOP)
	* has APIE
		* abstraction
		* polymorphism
		* inheritance
		* encapsulation
	* object builders
	* templates which build objects for us
*/

class Student
{
	// ? method used to create and initialize an object
	constructor(name, cohort, experience, country) {
		this.name = name
		this.cohort = cohort
		this.experience = experience
		this.country = country
		this.completed = false
	}

	// ? Abstraction - hiding functionality
	modifyProperty(key, newValue) {
		this[key] = newValue
	}
}

// ? Multiple instances of a class - that's polymorphism

// ? Instance of Student
let jackson = new Student("Jackson", "fullstack-12", "new", "US")

jackson.modifyProperty("completed", true)
console.log(jackson)

let jay = new Student("Jay", "fullstack-12", "new", "US")
jay.modifyProperty("experience", "expert")
console.log(jay)

// ? Functional Programming
function createStudent(name, cohort, experience) 
{
	return { name: name, cohort: cohort, experience: experience}
}

let kenny = createStudent("Kenny", "fullstack", "new")
console.log(kenny)

/* 
	? Inheritance
	* allows us to utilize original class
	* modify its structure
	* does not affect instances of original class
	* uses extends to accomplish this
	* super() allows you to inherit properties without redefining them again
	! not a good idea from systems design aspect - use dependency injection
*/

class Grades extends Student 
{
	constructor(name, cohort, grades) 
    {
		// ? used to inherit existing properties
		super(name, cohort)
		this.grades = grades
	}

	modifyGrades(grades) 
    {
		this.grades = grades
	}
}

let jayGrades = new Grades("Jay", "fullstack-12", [100, 98, 82])

jayGrades.modifyProperty("name", "Jason")

console.log(jayGrades)