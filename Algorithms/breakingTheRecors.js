// Given the scores for a season.
// Determine the number of times Maria breaks her records
// for most and least points scored during the season.
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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
	let mostPoints = scores[0];
	let leastPoints = scores[0];
	let mostCount = 0;
	let leastCount = 0;

	for (const score of scores) {
		if (mostPoints < score) {
			mostPoints = score;
			mostCount++;
		} else if (score < leastPoints) {
			leastPoints = score;
			leastCount++
		}
	}
	return [mostCount, leastCount];
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine().trim(), 10);

	const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

	const result = breakingRecords(scores);

	ws.write(result.join(' ') + '\n');

	ws.end();
}
