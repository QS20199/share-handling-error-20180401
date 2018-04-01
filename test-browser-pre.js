window.addEventListener('error', function (event) {
	console.error('onError:', event.message);
})

var el = document.createElement('script');
el.src = 'http://127.0.0.1:8887/test-browser.js';
el.crossOrigin = true;
document.body.appendChild(el);