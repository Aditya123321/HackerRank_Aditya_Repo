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

const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
};

function printDoublyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the sortedInsert function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(head, data) {
    var node = new DoublyLinkedList;

    var prevnode = new DoublyLinkedList;

    var postnode = new DoublyLinkedList;

    var newnode = new DoublyLinkedList;

    newnode.data = data;

    newnode.next = null;

    node = head;

    var  flag= 0;

    if (head == null || node.data > data) {

        newnode.next = node;

        node.prev = newnode;

        head = newnode;

        return head;

    }

    while (node != null) {

        if (node.data > data) {

            node.prev = newnode;

            newnode.next = node;

            prevnode.next = newnode;

            console.log(node.data);

            flag = 1;

            break;

        }

        prevnode = node;

        node = node.next;

    }

    if (flag != 1) {

        prevnode.next = newnode;

        newnode.prev = prevnode;

    }

    return head;

}

function main() {