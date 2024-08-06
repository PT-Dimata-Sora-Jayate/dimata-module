// alert(test);

// DRY -> Dont repeat yourself
const body = document.body;

// body.addEventListener('keypress', (event) => {
// 	if (event.key === 'Enter') {
// 		alert('BODY PRESS');
// 	}
// });

const printText = body.querySelector('#print-text');

const printed = body.querySelector('#printed');

printText.addEventListener('click', () => {
	timpa.classList.remove('hidden');
});

const timpa = body.querySelector('#timpa');

const buttonTimpa = body.querySelector('#timpa-text');

buttonTimpa.addEventListener('click', () => {
	timpa.classList.add('hidden');
});
const signUpForm = document.forms['sign-up-form'];
const firstNameInput = signUpForm['first-name'];
const firtsNameValue = document.querySelector('#first-name-value');
const errorFirstName = document.querySelector('#error-first-name');
const successFirstName = document.querySelector('#success-first-name');

signUpForm.onsubmit = (event) => {
	event.preventDefault();
	firstNameInput.value.trim() === ''
		? (errorFirstName.innerText = 'First name tidak boleh kosong')
		: (successFirstName.innerText = 'Oke, input diterima');
};

// firstNameInput.addEventListener('mouseover', () => {
// 	firtsNameValue.innerText = firstNameInput.value;
// });

// firstNameInput.addEventListener('mouseout', () => {
// 	firtsNameValue.innerText = 'Letakkan mouse pada atas input kembali';
// });

console.log(firstNameInput);
console.log(firtsNameValue);
