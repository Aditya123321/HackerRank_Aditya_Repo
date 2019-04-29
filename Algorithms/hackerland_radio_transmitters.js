process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var houses = readLine().split(' ').map(Number).sort(function(a, b) { return a - b; });
    var house = houses[0], transmitter = houses[0], i = 0, towers = 0;

    while( i < n) {
        transmitter = houses[i];
        house = houses[i];
        towers++;
        while(i < n && (houses[i] - house) <= k){
            i++;
        }
        transmitter = houses[i-1];
        while(i < n && houses[i] <= transmitter + k){
            i++;
        }
    }
    console.log(towers);
}