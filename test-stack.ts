import * as domain from 'domain';
import * as fs from 'fs';
import { VError, SError, WError } from 'verror';
let d = domain.create();
d.on('error', function (err) {
	console.error(err.stack);
});
function a() { b(); }
function b() { c(); }
function c() {
	// setTimeout(() => { throw new Error('error by async') }, 0);
	// throw new Error('error by sync');
	fs.stat('no_exist_file', (err, stats) => {
		if (err) {
			let e = new VError(err, 'file not found');
			throw e;
		} else {
			//...
		}
	})
	// new Promise((resolve, reject) => {
	// 	setTimeout(function () { 
	// 		let e = new VError()
	// 		reject(e);
	// 	}, 100);
	// }).catch(e => {
	// 	console.error(e.stack);
	// })
}

d.run(function () {
	a();
});


