'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    switch(s.charAt(0)) {
        case 'a' : letter = "A";
            break;
        case 'e': letter = "A";
            break;
        case 'i': letter = "A";
            break;
        case 'o': letter = "A";
            break;
        case 'u': letter = "A";
            break;


        case 'b': letter = "B";
            break;
        case 'c': letter = "B";
            break;
        case 'd': letter = "B";
            break;
        case 'f': letter = "B";
            break;
        case 'g': letter = "B";
            break;

        case 'h': letter = "C";
            break;
        case 'j': letter = "C";
            break;
        case 'k': letter = "C";
            break;
        case 'l': letter = "C";
            break;
        case 'm': letter = "C";
            break;

        case 'n': letter = "D";
            break;
        case 'p': letter = "D";
            break;
        case 'q': letter = "D";
            break;
        case 'r': letter = "D";
            break;
        case 's': letter = "D";
            break;
        case 't': letter = "D";
            break;
        case 'v': letter = "D";
            break;
        case 'w': letter = "D";
            break;
        case 'x': letter = "D";
            break;
        case 'y': letter = "D";
            break;
        case 'z': letter = "D";
            break;
        

    }
       
    return letter;
}

