'use strict';
/**
 * Given n(total pages) and p, find and print the minimum number of pages that must be turned in order to arrive at page p.
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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
	const totalPageTurns = Math.floor(n / 2);
	const frontTurns = Math.floor(p / 2);
	const backTurns = totalPageTurns - frontTurns;
	const count = frontTurns < backTurns ? frontTurns : backTurns;

	return count;

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine().trim(), 10);

	const p = parseInt(readLine().trim(), 10);

	const result = pageCount(n, p);

	ws.write(result + '\n');

	ws.end();
}
