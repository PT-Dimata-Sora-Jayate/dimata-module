// alert('Hello from external script');

// const body = document.body;

const printText = document.body.querySelector('#print-text');

const printed = document.body.querySelector('#printed');
console.log(printed.textContent);

printText.addEventListener('click', () => {
	alert(printed.textContent);
});
