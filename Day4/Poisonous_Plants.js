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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the poisonousPlants function below.
function poisonousPlants(p) {
    var day = 0;
    var flag = 0;
    var len = p.length;
    while (flag != len-1) {
        flag = 0;
        len = p.length;
        for (var i = len - 1; i > 0; i--) {
            if (p[i] > p[i - 1]) {
                console.log(p[i] + " " + p[i - 1]);
                for (var j = i; j < len - 1; j++)
                    p[j] = p[j + 1];
                p[len - 1] = null;
            }
            else {
                flag++;
                console.log(flag+" "+len);
            }
        }
        day++;
    }
    day--;
    return day;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));

    let result = poisonousPlants(p);

    ws.write(result + "\n");

    ws.end();
}
