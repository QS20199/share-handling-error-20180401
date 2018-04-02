let util = {};

function fn(p) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			reject('testReject');
			// util.notExistFn();
		}, 1000);

		// util.notExistFn();
	})
}

(async function () {
	try {
		await fn(11233);
		console.log('ok');
	} catch (e) {
		console.info('catch error:', e);
	}
})();