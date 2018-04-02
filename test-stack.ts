import * as domain from 'domain';
let d = domain.create();
d.on('error', function (err) {
	console.error(err.stack);
});

function a() { b(); }
function b() { c(); }
function c() {
	setTimeout(() => { throw new Error('error by async') }, 0);
	throw new Error('error by sync');
}

d.run(function () {
	a();
});


