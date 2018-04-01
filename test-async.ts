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

let events = require("events");
//创建一个事件监听对象
let emitter = new events.EventEmitter();
//监听error事件
emitter.addListener("error", function (e) {
    /*处理异常*/
    console.log(e.message)
});
//触发error事件
emitter.emit("error", new Error('出错啦'));