let students = ['Abby', 'Junha', 'Sastra', 'De Oka', 'Yastu', 'Zerina'];

let arrayAndFunctionSection = document.querySelector('#array-and-function');

let studentList = arrayAndFunctionSection.querySelector('ul'); // tag selector

console.log(studentList);
const renderStudentButton = arrayAndFunctionSection.querySelector('#render-student-btn');

renderStudentButton.addEventListener('click', () => {
	studentList.innerHTML = students
		.map((student) => {
			return `<li>${student}</li>`;
		})
		.join(''); // Join the array elements into a single string
	console.log(studentList);
});

const preparations = [
	{
		total: 'Lorem Ipsum',
	},
	{
		preparationTime: '5 minutes',
	},
	{
		blaBLa: 'Lorem Ipsum',
	},
];
