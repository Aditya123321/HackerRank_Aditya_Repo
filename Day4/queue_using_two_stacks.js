function processData(input) {
    //Enter your code here
    let size = parseInt(input.split('\n')[0]);
    input = input.split('\n').slice(1);
    let inputStack = [], outputStack = [];
    for (let i = 0; i < size; i++) {
        let query = parseInt(input[i][0]);
        switch (query) {
            case 1:
                let element = parseInt(input[i].slice(2));
                inputStack.push(element);
                break;
            case 2:
                if (outputStack.length == 0) {
                    while (inputStack.length) {
                        outputStack.push(inputStack.pop());
                    }
                }
                outputStack.pop();
                break;
            case 3:
                if (outputStack.length == 0) {
                    while (inputStack.length) {
                        outputStack.push(inputStack.pop());
                    }
                }
                console.log(outputStack[outputStack.length - 1]);
                break;
            default:
                console.log("Invalid Operation");
                break;
        }

    }
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
