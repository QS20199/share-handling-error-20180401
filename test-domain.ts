import * as domain from 'domain';
import * as events from 'events';
let d = domain.create();
d.on('error', function (err) {
	console.error('error catch by domain.onError, error:', err);
	// d.dispose();
});

let e = new events.EventEmitter();
d.run(function () {

	// process.nextTick(function () {
	//  throw new Error('async err by nextTick');
	// })

	// setTimeout(function () {
	// throw new Error('async err by timer');
	// }, 1000);

	d.add(e);
	e.on('testEvent', function (e) {
		console.log('testEvent received');
		throw new Error('err in testEvent');
	})
});

e.emit('testEvent')

setInterval(() => {
	//...
}, 1000);