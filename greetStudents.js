function greetStudents(student, cohort)
{
	return `Welcome to ${cohort}, ${student}`
}

// this exports the function into module object
module.exports = greetStudents