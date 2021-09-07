'use strict';
//Given an array of bird sightings where every element represents a bird type id,
//determine the id of the most frequently sighted type.
//If more than 1 type has been spotted that maximum amount,
//return the smallest of their ids.

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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
	let map = {}
	let result = [];
	let maxCount = 0;
	
	for (let i = 0; i < arr.length; i++) {
		if (!map[arr[i]]) {
			map[arr[i]] = 1;
		} else {
			map[arr[i]] += 1;
		}

		// get max
		if (map[arr[i]] > maxCount) {
			maxCount = map[arr[i]];
		}
	}


	for (let j = 0; j < arr.length; j++) {
		if (map[arr[j]] === maxCount) {
			result.push(arr[j]);
		}
	}

	return Math.min(...result);

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const arrCount = parseInt(readLine().trim(), 10);

	const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

	const result = migratoryBirds(arr);

	ws.write(result + '\n');

	ws.end();
}
