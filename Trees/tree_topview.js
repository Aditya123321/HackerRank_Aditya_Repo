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
	public static void topView(Node root) {
        if(root==null){
            return;
        }
        System.out.print(root.data+" ");
        topView(root.right);
      
      
    }

	public static Node insert(Node root, int data) {