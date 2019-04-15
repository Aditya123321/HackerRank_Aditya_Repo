function processData(input) {
    var inp = input.split("\n");
    var N = inp[0];
    var stack = [];
    var max = -1;
    for (var i = 1; i <= N; i++) {
        var q = inp[i].split(" ");
        if (q[0] == 1) {
            stack.push(parseInt(q[1]));
            max = Math.max(parseInt(q[1]), max);
        }
        else if (q[0] == 2) {
            var temp = stack.pop();
            if (temp == max)
                max = updateMax(stack);
        } else {
            console.log(max);
        }
    }
}

function updateMax(arr) {
    if (arr.length == 0)
        return -1;
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        max = Math.max(arr[i], max);
    }
    return max;
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
