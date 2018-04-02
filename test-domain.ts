import * as domain from 'domain';
import * as events from 'events';
let oneEventEmmitter = new events.EventEmitter();
let oneDomain = domain.create();
// oneDomain.add(oneEventEmmitter);
oneDomain.on('error', function (err) {
	console.info('error catch by domain.onError, error:', err.message);
});

oneDomain.run(function () {
	// 由nextTick抛出的异步错误
	process.nextTick(() => {
		throw new Error('async err by nextTick');
	})

	// 由timer抛出的异步错误
	setTimeout(() => {
		throw new Error('async err by timer');
	}, 0);

	// 由EventEmitter抛出的异步错误
	oneEventEmmitter.addListener('data', (data) => {
		throw new Error('async err by EventEmitter');
	})

	// 直接抛出的错误
	throw new Error('sync err in d.run');
});

setTimeout(function () { oneEventEmmitter.emit('data', {}) }, 1000);
