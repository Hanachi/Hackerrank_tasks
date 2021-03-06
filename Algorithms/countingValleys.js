'use strict';
/**An avid hiker keeps meticulous records of their hikes.
 * During the last hike that took exactly  steps, for every step it was noted if it was an uphill, U, or a downhill, D step.
 * Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
 */

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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
	let seaLevel = 0
	let counter = 0

	for (let i = 0; i <= steps; i++) {

		if (path[i] == 'U') {
			seaLevel++;
		} else {
			seaLevel--;
		}

		if (path[i] == 'U' && seaLevel == 0) {
			counter++;
		}
	}

	return counter;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const steps = parseInt(readLine().trim(), 10);

	const path = readLine();

	const result = countingValleys(steps, path);

	ws.write(result + '\n');

	ws.end();
}
