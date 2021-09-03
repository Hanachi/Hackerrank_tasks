'use strict';
//Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

//Lily decides to share a contiguous segment of the bar selected such that:

//The length of the segment matches Ron's birth month, and,
//The sum of the integers on the squares is equal to his birth day.
//Determine how many ways she can divide the chocolate.

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
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		let sum = 0;
		let slicedArray = s.slice(i, i + m);

		sum = slicedArray.reduce((acc, currV) => acc + currV);
		if (sum === d && slicedArray.length === m) {
			count++
		}
	}
	return count;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine().trim(), 10);

	const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

	const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

	const d = parseInt(firstMultipleInput[0], 10);

	const m = parseInt(firstMultipleInput[1], 10);

	const result = birthday(s, d, m);

	ws.write(result + '\n');

	ws.end();
}
