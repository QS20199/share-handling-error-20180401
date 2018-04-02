let util: any = {};

		function fn(p) {
			return new Promise((resolve, reject) => {
				setTimeout(function () {
					util.notExistFn(); // 不会自动reject, 会引发fatalException
					reject('testReject');
				}, 1000);
				
				util.notExistFn(); // 可以自动reject
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