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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {

    /*
     * Write your code here.
     */
    var hours = parseInt(s.substring(0, s.indexOf(':')));
    var minutes = parseInt(s.substring(s.indexOf(':') + 1, s.lastIndexOf(':')));
    var seconds = parseInt(s.substring(s.lastIndexOf(':') + 1, s.lastIndexOf(':') + 3));
    var formatHrs;
    if (hours === 12) {
        formatHrs = 0;
    } else {
        formatHrs = hours;
    }
    var change;
    if (s.toLowerCase().indexOf('pm') > -1) {
        change = 12;
    } else {
        change= 0;
    }

    var formatedHours = format((formatHrs + change).toString());
    var formatedMinutes = format(minutes.toString());
    var formatedSeconds = format(seconds.toString());

    //console.log(formatedHours + ":" + formatedMinutes + ":" + formatedSeconds);
    var str = formatedHours + ":" + formatedMinutes + ":" + formatedSeconds;
    return str;
    function format(numString) {
        if (numString.length === 1) {
            return "0" + numString;
        }
        return numString;
    }

}





function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
