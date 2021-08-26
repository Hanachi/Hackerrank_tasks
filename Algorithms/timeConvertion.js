'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
	let PM = s.match('PM') ? true : false;
	let AM = s.match('AM') ? true : false;
	let AM_PM = PM ? 'PM' : 'AM';

	s = s.split(':');
	let [hours, minutes, seconds] = [s[0], s[1], s[2]];

	if (PM && hours !== '12') {
		hours = 12 + parseInt(hours, 10);
		seconds = seconds.replace('PM', '');
	}
	if (AM && hours == '12') {
		hours = 12 - parseInt(hours, 10) + '0';
		seconds = seconds.replace('AM', '');
	} else {
		seconds = seconds.replace(AM_PM, '');
	}

	let newTime = `${hours}:${minutes}:${seconds}`;
	return newTime;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const s = readLine();

	const result = timeConversion(s);

	ws.write(result + '\n');

	ws.end();
}
