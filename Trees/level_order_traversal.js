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
public static void levelOrder(Node node){
    Queue<Node> q = new LinkedList<Node>();
    q.add(node);
 
    while (!q.isEmpty()){
        Node n = q.remove();
        if (n.left != null){
            q.add(n.left);
        }

        if (n.right != null){
            q.add(n.right);
        }
        System.out.print(n.data+" ");
    }
}
	public static Node insert(Node root, int data) {