// let promise = fetch(url, [options])

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
			console.log(data);
			console.log(data.id);
			console.log(`Dad Joke: ${data.joke}`);
		})
		.catch((error) => {
			console.error('Error fetching dad joke:', error);
		})
		.finally(() => {
			console.log('TERIMA KASIH');
		});
}

fetchDadJoke();

// function fetchDadJoke2() {
// 	fetch('https://icanhazdadjoke.com/', {
// 		headers: { Accept: 'application/json' },
// 	})
// 		.then((response) => {
// 			console.log('[INI RESPONSE]', response);
// 			if (!response.ok) {
// 				throw new Error(`HTTP error! Status: ${response.status}`);
// 			} else {
// 				return response.json();
// 			}
// 		})
// 		.then((data) => {
// 			console.log('[BENTUK MENTAH DATA]', data);
// 		})
// 		.catch((error) => {
// 			console.error('Error fetching dad joke:', error);
// 		});
// }
