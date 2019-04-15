import java.util.*;
 
abstract class Node implements Comparable<Node> {
    public  int frequency; // the frequency of this tree
    public  char data;
    public  Node left, right; 
    public Node(int freq) { 
      frequency = freq; 
    }
 
    // compares on the frequency
    public int compareTo(Node tree) {
        return frequency - tree.frequency;
    }
}
 
class HuffmanLeaf extends Node {
    
 
    public HuffmanLeaf(int freq, char val) {
        super(freq);
        data = val;
    }
}
 
class HuffmanNode extends Node {
    
    public HuffmanNode(Node l, Node r) {
        super(l.frequency + r.frequency);
        left = l;
        right = r;
    }

}


class Decoding {

/*  
	class Node
		public  int frequency; // the frequency of this tree
    	public  char data;
    	public  Node left, right;
    
*/ 

	void decode(String S, Node root) {
        char[] inputs = S.toCharArray(); 
    String result = ""; 
    Node c = root;
    for (int i = 0; i < S.length(); i++) 
    {
        c = Character.getNumericValue(inputs[i]) == 0 ? c.left : c.right;
        if (c.data != '\0') 
        {
            result += c.data;
            c = root;
        }
    }
    System.out.print(result);

       
    }

