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

// Complete the encryption function below.
function encryption(s) {
    var len = s.length;
    var val =Math.sqrt(len);

    var max = Math.ceil(val);
    var min = Math.floor(val);
    if (max * min < len) {
        min = max;
    }

    var matrx = [[]];
    var i = 0;

    for (var x = 0; x < min; x++) {
        for (var y = 0; y < max; y++) {
            if (s[i] != null) {
                matrx[[x, y]] = s[i];
                i++;
            }
            else {
                matrx[[x, y]] = "";
                i++;
            }
        }
    }
    var str = "";
    for (var x = 0; x < max; x++) {
        for (var y = 0; y < min; y++) {
            str = str + matrx[[y,x]];
        }
        str = str + " ";
    }
    return str;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
