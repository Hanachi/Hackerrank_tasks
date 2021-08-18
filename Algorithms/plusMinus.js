'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function() {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
* Complete the 'plusMinus' function below.
*
* The function accepts INTEGER_ARRAY arr as parameter.
*/

function plusMinus(arr) {
	let result;
	let plus = 0;
	let minus = 0;
	let zero = 0;
	arr.map((el) => {
		if(el > 0) {
			plus++;
		} else if(el < 0) {
			minus++;
		} else {
			zero++;
		}
	})
	
	let plusRes = (plus/arr.length).toFixed(6);
	let minusRes = (minus/arr.length).toFixed(6);
	let zeroRes = (zero/arr.length).toFixed(6);
	
	result = console.log(plusRes, '\n', minusRes, '\n', zeroRes);
	return result;

}

function main() {
	const n = parseInt(readLine().trim(), 10);

	const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

	plusMinus(arr);
}
