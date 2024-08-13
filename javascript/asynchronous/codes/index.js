const a = 1;
const b = 2;
const c = 3;

console.log(a);
setTimeout(() => console.log(b), 1000);
console.log(c);

let janji = new Promise(function (resolve, reject) {
	// executor
	// setTimeout(() => resolve('Done'), 1000);
	setTimeout(() => reject(new Error('Ops')), 1000);
});

janji
	.then((hasil) => {
		console.log('[INI HASIL]', hasil);
	})
	.catch((error) => {
		console.log('[INI ERROR]', error);
	})
	.finally(() => {
		console.log('Resolve maupun Reject tetap dijalankan');
	});

function fetchDadJoke() {
	fetch('https://icanhazdadjoke.com/', {
		headers: { Accept: 'application/json' },
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then((data) => {
			console.log(`Dad Joke: ${data.joke}`);
		})
		.catch((error) => {
			console.error('Error fetching dad joke:', error);
		});
}

// Call the function to fetch and log a dad joke
fetchDadJoke();
