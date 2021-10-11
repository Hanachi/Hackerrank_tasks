'use strict';

/**
 * An English text needs to be encrypted using the following encryption scheme.
 * First, the spaces are removed from the text. Let  be the L length of this text.
 * After removing spaces, the string is n characters long. sqrt(n) is between x and y,
 * so it is written in the form of a grid with x rows and y columns.
 * The encoded message is obtained by displaying the characters of each column, with a space between column texts.
 * Create a function to encode a message.
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
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
	const rows = Math.floor(Math.sqrt(s.length));
	const columns = Math.ceil(Math.sqrt(s.length));
	let result = '';

	for (let i = 0; i < columns; i++) {
		let j = i;
		while (j < s.length) {
			result += s[j];
			j += columns;
		}
		result += ' ';
	}
	return result;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const s = readLine();

	const result = encryption(s);

	ws.write(result + '\n');

	ws.end();
}
