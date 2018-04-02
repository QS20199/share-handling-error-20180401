import * as Koa from 'koa';
let koa = new Koa();
koa.use(async (ctx, next) => {
	try {
		await next();
	} catch (e) {
		console.error(e.stack)
		ctx.status = 500;
	}
})

koa.use(async (ctx, next) => {
	await testError();
	ctx.body = 'ok';
})

koa.listen(8000);

function testError() {
	return new Promise((resolve, reject) => {
		// throw new Error('error by async');
		
		setTimeout(function () {
			throw new Error('error by async');
			// resolve();
		}, 0);
	})
}