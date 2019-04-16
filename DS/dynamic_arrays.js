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

// Complete the dynamicArray function below.
function dynamicArray(n, queries) {
    const list = [];

    let lastAnswer = 0;

    let s = [];

    for (let i = 0; i < n; i++) {

        s.push([]);

    }

    for (let i in queries) {

        let index = (queries[i][1] ^ lastAnswer) % n;

        if (queries[i][0] == 1) {

            s[index].push(queries[i][2]);

        } else {

            let size = s[index].length;

            lastAnswer = s[index][queries[i][2] % size];

            list.push(lastAnswer);

        }

    }

    return list;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nq[0], 10);

    const q = parseInt(nq[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
