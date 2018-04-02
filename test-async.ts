function fn(p) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			// reject('testReject');
			// throw new Error('testError');
		}, 1000);
		throw new Error('testError');
	})
}

(async function () {
	try {
		await fn(11233);
		console.log('ok');
	} catch (e) {
		console.error('catch error:', e);
	}
})();