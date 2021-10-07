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
 * Complete the 'biggerIsGreater' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING w as parameter.
 */

function biggerIsGreater(w) {
	let arr = w.split('');
	for (let i = arr.length - 2; i >= 0; i--) {
		// starting from end to find the index that there is/are greater characters after that
		let biggerChars = arr.slice(i + 1).filter((v) => arr[i] < v);
		if (biggerChars.length > 0) {
			// find the smallest character that is also bigger than the previous character
			let index;
			index = i + 1 + arr.slice(i + 1).indexOf(biggerChars.sort()[0]);
			// and swap those with each other
			[arr[i], arr[index]] = [arr[index], arr[i]];
			
			const result = arr
				.slice(0, i + 1)
				.concat(arr.slice(i + 1).sort())
				.join('');

			return result;
		}
	}

	return 'no answer';

}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const T = parseInt(readLine().trim(), 10);

	for (let TItr = 0; TItr < T; TItr++) {
		const w = readLine();

		const result = biggerIsGreater(w);

		ws.write(result + '\n');
	}

	ws.end();
}
