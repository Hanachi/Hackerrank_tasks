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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
	let roundedGrades = [];
	for (let i = 0; i < grades.length; i++) {
		let difference = multipleByFive(grades[i]);
		let roundedGrade = difference + grades[i];

		if ((difference < 3) && (roundedGrade >= 40)) {
			roundedGrades.push(roundedGrade);
		} else {
			roundedGrades.push(grades[i]);
		}
	}

	function multipleByFive(grade) {
		let counter = 0;
		while (grade % 5 != 0) {
			grade++;
			counter++;
		}
		return counter;
	}
	return roundedGrades;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const gradesCount = parseInt(readLine().trim(), 10);

	let grades = [];

	for (let i = 0; i < gradesCount; i++) {
		const gradesItem = parseInt(readLine().trim(), 10);
		grades.push(gradesItem);
	}

	const result = gradingStudents(grades);

	ws.write(result.join('\n') + '\n');

	ws.end();
}
