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

// Complete the hackerrankInString function below.
function hackerrankInString(s) {

    var hr = "hackerrank"; 
    var ch;
    var index;
    var i = 0;
    var startIndex = 0;

    // **** perform some sanity checks ****
    if (s.length < hr.length)
        return "NO";

    // **** traverse the hackerrank string ****//
    for (i = 0; ((i < hr.length && startIndex <= s.length)); i++) {

        // **** get the next character from "hackerrank"****
         ch = hr.charAt(i);

        // **** start at this point in s ****
        var ss = s.substring(startIndex);

        // **** get the index for this character in the substring ****
       index = ss.indexOf(ch);

        // **** this character not found ****
        if (index == -1)
            return "NO";

        // **** update the start index ****
        startIndex += (index + 1);
    }

    // **** hackerrank found ****
    return "YES";

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = hackerrankInString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
