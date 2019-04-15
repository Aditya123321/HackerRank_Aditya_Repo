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

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    var dummyNode = new SinglyLinkedList();

    var tail = dummyNode;

    while (true) {



        if (head1 == null) {

            tail.next = head2;

            break;

        }

        if (head2 == null) {

            tail.next = head1;

            break;

        }



        /* Compare the data of the two 

        lists whichever lists' data is  

        smaller, append it into tail and 

        advance the head to the next Node 

        */

        if (head1.data <= head2.data) {

            tail.next = head1;

            head1 = head1.next;

        }

        else {

            tail.next = head2;

            head2 = head2.next;

        }



        /* Advance the tail */

        tail = tail.next;

    }

    return dummyNode.next; 


}

function main() {