	/* Class node is defined as :
    class Node 
    	int val;	//Value
    	int ht;		//Height
    	Node left;	//Left child
    	Node right;	//Right child

	*/

	public static class AVLTree{
    
 
    public static int heightMax(Node root)
    {
        int maxHeight = -1;
        if(root.left != null)
            maxHeight = Math.max(maxHeight, root.left.ht);
        if(root.right != null)
            maxHeight = Math.max(maxHeight, root.right.ht);
        return maxHeight;
    }
    
    
    public static Node rotateRight(Node x)
    {
        Node y = x.left;
        x.left = y.right;
        y.right = x;
        // height
        x.ht = heightMax(x)+1;
        y.ht = heightMax(y)+1;
        return y;
    }
    
    public static Node rotateLeft(Node x)
    {
        Node y = x.right;
        x.right = y.left;
        y.left = x;
        // height
        x.ht = heightMax(x)+1;
        y.ht = heightMax(y)+1;
        return y;
    }
    
    public static int balanceFactor(Node root)
    {
        int left = -1;
        int right = -1;
        if(root.left != null)
            left = root.left.ht;
        if(root.right != null)
            right = root.right.ht;
        return (left - right);
    }
}
  public static Node insert(Node root, int val)
    {
      AVLTree avl = new AVLTree();
        if(root == null)
        {
            Node node = new Node();
            node.val = val;
            node.left = node.right = null;
            node.ht = 0;
            return node;
        }
        
        if(val < root.val)
            root.left = insert(root.left, val);
        else
            root.right = insert(root.right, val);
        int balanceFactor = avl.balanceFactor(root);
        if(balanceFactor < -1)
        {
            if(avl.balanceFactor(root.right) > 0)
            {
                root.right = avl.rotateRight(root.right);
                return avl.rotateLeft(root);
            }
            else
                return avl.rotateLeft(root);
        }
        else
        {
            if(balanceFactor > 1)
            {
                if(avl.balanceFactor(root.left) < 0)
                {
                    root.left = avl.rotateLeft(root.left);
                    return avl.rotateRight(root);
                }
                else
                    return avl.rotateRight(root);
            }
        }
        root.ht = avl.heightMax(root) + 1;
        return root;
    }