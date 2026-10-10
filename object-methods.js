/* 
	? Object Methods
	* functions working on specific object
	* deal with scope
		* global (outside) (default)
		* this (inside) (allows access to the correct scope)
	* this - defines the scope of object in which a method resides
		* think of it as "look here"
*/

let name = "Paul"

let student = {
	name: "Kenny",
	class: "fullstack-12",
	isEnrolled: true,
	
	// method as a function call
	showName() 
    {
		return this.name
	},

	// method as property function declaration
	modifyEnrollment: function(enrolled) {
		return this.isEnrolled = enrolled
	},

	// method as arrow function
	modifyClass: (newClass) => {
		return this.class = newClass
	}
	// ! this (haha) will never work, it does not bind to this
}

console.log(student.showName())

let returnOfModifyEnrollment = student.modifyEnrollment(true)
console.log(returnOfModifyEnrollment)

student.modifyClass("fullstack-15")

console.log(student)

function changeName(obj, value)
{
	obj.name = value
}

changeName(student, "Jay")

console.log(student)