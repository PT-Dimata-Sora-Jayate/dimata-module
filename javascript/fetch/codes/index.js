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
			console.log(`Dad Joke: ${data.joke}`);
		})
		.catch((error) => {
			console.error('Error fetching dad joke:', error);
		});
}

fetchDadJoke();
