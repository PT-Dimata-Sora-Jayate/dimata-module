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

// Menyimpan object form dengan name "sign-up-form"
// Menyimpan object didalam sign-up-form dengan name "first-name"
// Menyimpan object dengan id "error-first-name"
// Menyimpan object dengan id "success-first-name"

// Method onSubmit
// Argument event ini merupakan sebuah object yang
// berisikan informasi tentang "event".

// preventDefault() ini untuk mencegah tindakan default
// yaitu adalah mengirim sata ke server dan melakukan
// refresh halaman.

const signUpForm = document.forms['sign-up-form'];
const firstNameInput = signUpForm['first-name'];
const errorFirstName = document.querySelector('#error-first-name');
const successFirstName = document.querySelector('#success-first-name');

signUpForm.onsubmit = (event) => {
	event.preventDefault();
	firstNameInput.value.trim() === ''
		? (errorFirstName.innerText = 'First name tidak boleh kosong')
		: (successFirstName.innerText = 'Oke, input diterima');
};
