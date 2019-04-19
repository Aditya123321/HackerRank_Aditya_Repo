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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

    arr.sort(numberAs);
    var minsum = 0;
    var maxsum = 0;

    for (var x = 0; x < arr.length; x++) {
        maxsum = maxsum + arr[x];
        minsum= minsum+arr[x]
    }
    maxsum = maxsum - arr[0];
    minsum = minsum - arr[arr.length - 1];
    console.log(minsum + " " + maxsum);
}
function numberAs(a, b) {
    return a - b;
}


function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
