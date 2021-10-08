'use strict';

/**
 * You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C.
 * Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line.
 * If cat  catches the mouse first, print Cat A.
 * If cat  catches the mouse first, print Cat B.
 * If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
 */

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
	inputString += inputStdin;
});

process.stdin.on('end', _ => {
	inputString = inputString.replace(/\s*$/, '')
		.split('\n')
		.map(str => str.replace(/\s*$/, ''));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
	const catADistance = Math.abs(z - x);
	const catBDistance = Math.abs(z - y);
	const catchMouse = Math.min(catADistance, catBDistance);

	if (catADistance > catBDistance) {
		return 'Cat B';
	} else if (catBDistance > catADistance) {
		return 'Cat A';
	} else {
		return 'Mouse C';
	}

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const q = parseInt(readLine(), 10);

	for (let qItr = 0; qItr < q; qItr++) {
		const xyz = readLine().split(' ');

		const x = parseInt(xyz[0], 10);

		const y = parseInt(xyz[1], 10);

		const z = parseInt(xyz[2], 10);

		let result = catAndMouse(x, y, z);

		ws.write(result + "\n");
	}

	ws.end();
}
