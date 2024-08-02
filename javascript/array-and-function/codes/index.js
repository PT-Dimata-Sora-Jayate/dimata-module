// const arr = [];
// console.log(arr.push('Element 1'));
// console.log(arr);

let students = ['Student 1', 'Student 2', 'Student 3'];
console.log(
	students.map((student) => {
		return student.toUpperCase();
	}),
);

let value = 1;
console.log(value);

function myFunction(cb) {
	cb();
}

myFunction(() => {
	value = 10;
});

console.log(value);
