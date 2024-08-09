// DRY -> Dont repeat yourself
const body = document.body;

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

// Menyimpan object form dengan name "sign-up-form"

const firstNameValue = document.querySelector('#first-name-value');

console.log('[FIRST NAME VALUE]', firstNameValue);
// Menyimpan object didalam sign-up-form dengan name "first-name"
const signUpForm = document.forms['sign-up-form'];

function validation(event) {
	event.preventDefault();
	firstNameInput.value.trim() === ''
		? (firstNameValue.innerText = 'First name tidak boleh kosong')
		: (firstNameValue.innerText = 'Oke, input diterima');
}

const firstNameInput = signUpForm['first-name'];
const firstNameInputValue = firstNameInput.value;

signUpForm.onsubmit = validation;

// firstNameInput.addEventListener('mouseover', () => {
// 	firstNameValue.innerText = firstNameInput.value;
// });

// firstNameInput.addEventListener('mouseout', () => {
// 	firstNameValue.innerText = 'Letakkan cursor diatas input';
// });

// firstNameInput.addEventListener('input', () => {
// 	firstNameValue.innerText = firstNameInput.value;
// });
// Menyimpan object dengan id "error-first-name"
const errorFirstName = document.querySelector('#error-first-name');
// Menyimpan object dengan id "success-first-name"
const successFirstName = document.querySelector('#success-first-name');
// Method onSubmit
// Argument event ini merupakan sebuah object yang
// berisikan informasi tentang "event".
// preventDefault() ini untuk mencegah tindakan default
// yaitu adalah mengirim sata ke server dan melakukan
// refresh halaman.
// signUpForm.onsubmit = (event) => {

// };
