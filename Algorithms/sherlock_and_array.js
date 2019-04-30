'use strict';

const fs = require('fs');

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

// Complete the balancedSums function below.
function balancedSums(arr) {

    var left = 0;
    var right = arr.length - 1;
    var left_sum = arr[left];
    var right_sum = arr[right];
    while (left != right) {
        if (left_sum < right_sum) {
            left = left + 1;
            left_sum = left_sum + arr[left];
        }
        
        else {
            right = right - 1;
            right_sum = right_sum + arr[right];
        }      

    }
    if (left_sum == right_sum) {
        return "YES"
    }
    else {
        return "NO";
    }


}




function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = balancedSums(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
