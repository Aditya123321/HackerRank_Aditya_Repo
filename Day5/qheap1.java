import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */

         PriorityQueue<Integer> heap=new PriorityQueue<Integer>(); // implementing heap variable
        Scanner ab=new Scanner(System.in);
        int n=ab.nextInt();
        while(n-->0)
            {
            int k=ab.nextInt();
             int data;
            switch(k)
                {
                case 1:
                 data=ab.nextInt();
                heap.offer(data); // add data
                break;
                case 2:
                 data=ab.nextInt();
                heap.remove(data);
                break;
                case 3:
                System.out.println(heap.peek());
                break;
            }
        }
    }
    
}

