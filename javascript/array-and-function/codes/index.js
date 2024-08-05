let students = ['Abby', 'Junha', 'Sastra', 'De Oka', 'Yastu', 'Zerina'];

let arrayAndFunctionSection = document.querySelector('#array-and-function');

let studentList = arrayAndFunctionSection.querySelector('ul');

const renderStudentButton = document.querySelector('#render-student-btn');

renderStudentButton.addEventListener('click', () => {
	studentList.innerHTML = students
		.map((student) => {
			return '<li>' + student + '</li>';
		})
		.join(''); // Join the array elements into a single string
	console.log(studentList);
});

let value = 1;

function myFunction(cb) {
	cb();
}

myFunction(() => {
	value = 10;
});
