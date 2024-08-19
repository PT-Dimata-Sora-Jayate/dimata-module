const a = 1;
const b = 2;
const c = 3;

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(a);
// setTimeout(() => console.log(b), 1000);
// console.log(c);

let janji = new Promise(function (resolve, reject) {
	// executor
	setTimeout(() => resolve('Done'), 1000);
	// setTimeout(() => reject(new Error('Ops')), 1000);
});

janji
	.then((user) => {
		console.log('[INI HASIL]', user);
	})
	.catch((err) => {
		console.log('[INI ERROR]', err);
	})
	.finally(() => {
		console.log('[INI RESOLVE], Resolve maupun Reject tetap dijalankan');
	});
