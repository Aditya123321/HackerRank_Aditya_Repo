'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    var len = arr.length;

    var r = 0, r1 = 0, r2 = 0;
    for (var x = 0; x < len; x++) {
        if (arr[x] > 0) {
            r++;
        }
        else if (arr[x] < 0) {
            r1++;
        }

        else { r2++; }
    }
    console.log(r / len);
    console.log(r1 / len);
    console.log(r2 / len);




}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
