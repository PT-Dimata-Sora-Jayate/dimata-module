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
