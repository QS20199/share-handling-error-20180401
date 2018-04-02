function fn(p) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			reject('testReject');
			// throw new Error('testError');
		}, 1000);
		// throw new Error('testError');
	})
}

(async function () {
	try {
		console.log('start');
		let p = await fn(11233);
		console.log(p);
	} catch (e) {
		console.error('catch error:', e);
	}
})();

setInterval(() => { }, 10000);