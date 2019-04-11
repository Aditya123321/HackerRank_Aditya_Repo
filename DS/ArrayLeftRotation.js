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



function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
   
    for (var y = 0; y < d; y++) {
        var temp = a[0];
        for (var x = 0; x < a.length - 1; x++) {

            a[x] = a[x + 1];
        }
        a[a.length - 1] = temp;
    }
        var next = "";

        for (var i = 0; i < a.length; i++)

            next = next + a[i] + " ";

        console.log(next);
    
}
