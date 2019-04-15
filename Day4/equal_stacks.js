'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the equalStacks function below.
 */
function equalStacks(h1, h2, h3) {
    /*
     * Write your code here.
     */
    let h1Height = h1.length > 0 ? h1.reduce((a, b) => a + b) : 0;
    let h2Height = h2.length > 0 ? h2.reduce((a, b) => a + b) : 0;
    let h3Height = h3.length > 0 ? h3.reduce((a, b) => a + b) : 0;
    let lowestHeight = Math.min(h1Height, h2Height, h3Height);
    let allEqual = h1Height === h2Height && h1Height === h3Height;
    while (!allEqual) {
        if (h1Height > lowestHeight) {
            const removedElem = h1.shift();
            h1Height -= removedElem;
        }
        if (h2Height > lowestHeight) {
            const removedElem = h2.shift();
            h2Height -= removedElem;
        }
        if (h3Height > lowestHeight) {
            const removedElem = h3.shift();
            h3Height -= removedElem;
        }
        lowestHeight = Math.min(h1Height, h2Height, h3Height);
        allEqual = h1Height === h2Height && h1Height === h3Height;
    }
    return lowestHeight;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n1N2N3 = readLine().split(' ');

    const n1 = parseInt(n1N2N3[0], 10);

    const n2 = parseInt(n1N2N3[1], 10);

    const n3 = parseInt(n1N2N3[2], 10);

    const h1 = readLine().split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().split(' ').map(h3Temp => parseInt(h3Temp, 10));

    let result = equalStacks(h1, h2, h3);

    ws.write(result + "\n");

    ws.end();
}
