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
	public static int height(Node root){
    int leftHeight = 0;
    int rightHeight = 0;
    if (root != null){
        if (root.left != null){
            leftHeight = height(root.left)+1;
        }
        if (root.right != null){
            rightHeight = height(root.right)+1;
        }
    }

    return leftHeight > rightHeight ? leftHeight : rightHeight;
}

	public static Node insert(Node root, int data) {