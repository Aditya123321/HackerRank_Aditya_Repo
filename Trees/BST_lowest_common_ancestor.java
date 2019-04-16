import java.util.*;
import java.io.*;

class Node {
    Node left;
    Node right;
    int data;
    
    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}

class Solution {

	/*
    class Node 
    	int data;
    	Node left;
    	Node right;
	*/
public static Node lca(Node root, int v1, int v2) {

          Node temp = root;

          

        if (v1 < root.data && v2 < root.data) {

            temp = lca(root.left, v1, v2);

        }

        else if (v1 > root.data && v2 > root.data) {

            temp = lca(root.right, v1, v2);

        }



        return temp;

    }

	public static Node insert(Node root, int data) {