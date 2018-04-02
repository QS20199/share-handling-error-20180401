import * as fs from 'fs';
import * as path from 'path';

setInterval(function () {
	let string;
	if (Math.random() > 0.5) {
		string = '\nsuccess with random: ' + Math.random();
	} else {
		string = '\nerror with random: ' + Math.random();
	}
	fs.appendFileSync(path.resolve(__dirname, '../tmp/log.txt'), string, {
		encoding: 'utf-8'
	})
}, 300);