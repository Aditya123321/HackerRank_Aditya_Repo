import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    static class SinglyLinkedListNode {
        public int data;
        public SinglyLinkedListNode next;

        public SinglyLinkedListNode(int nodeData) {
            this.data = nodeData;
            this.next = null;
        }
    }

    static class SinglyLinkedList {
        public SinglyLinkedListNode head;
        public SinglyLinkedListNode tail;

        public SinglyLinkedList() {
            this.head = null;
            this.tail = null;
        }

        public void insertNode(int nodeData) {
            SinglyLinkedListNode node = new SinglyLinkedListNode(nodeData);

            if (this.head == null) {
                this.head = node;
            } else {
                this.tail.next = node;
            }

            this.tail = node;
        }
    }

    public static void printSinglyLinkedList(SinglyLinkedListNode node, String sep, BufferedWriter bufferedWriter) throws IOException {
        while (node != null) {
            bufferedWriter.write(String.valueOf(node.data));

            node = node.next;

            if (node != null) {
                bufferedWriter.write(sep);
            }
        }
    }

    // Complete the findMergeNode function below.

    /*
     * For your reference:
     *
     * SinglyLinkedListNode {
     *     int data;
     *     SinglyLinkedListNode next;
     * }
     *
     */
    static int findMergeNode(SinglyLinkedListNode head1, SinglyLinkedListNode head2) {

int headALen = 0, headBLen = 0;

    SinglyLinkedListNode headAcopy = head1, headBcopy = head2;

    while(headAcopy != null){

        headAcopy = headAcopy.next;

        headALen++;

    }

    while(headBcopy != null){

        headBcopy = headBcopy.next;

        headBLen++;

    }

    while(headALen > headBLen){

        head1 = head1.next;

        headALen--;

    }

    while(headBLen > headALen){

        head2 = head2.next;

        headBLen--;

    }

    while(head1 != null){

        if (head1 == head2){

            return head1.data;

        }

        head1 = head1.next;

        head2 = head2.next;

    }

    return -1;
    }

    private static final Scanner scanner = new Scanner(System.in);