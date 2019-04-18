import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

class Range{
    int low;
    int high;
    
    public Range(int low,int high){
        this.low=low;
        this.high=high;
    }
    
    public static boolean isOverlapping(Range a,Range b){
        if(a.high <b.low || a.low >b.high)
            return false;
        else 
            return true;
    }
}
class RangeComparator implements Comparator<Range>{
 @Override
 public int compare(Range a,Range b) {
  if(a.low < b.low)
            return -1;
        else if(a.low>b.low)
            return 1;
        else
            return a.high-b.high;
 }
}

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner in=new Scanner(System.in);
        int n=in.nextInt();
        int m=in.nextInt();
        Range shotArray[]=new Range[n];
        Range fieldArray[]=new Range[m];
        int count=0;
        int total=0;
        
       for(int i=0;i<n;i++)
          shotArray[i]=new Range(in.nextInt(),in.nextInt());

        for(int i=0;i<m;i++)
            fieldArray[i]=new Range(in.nextInt(),in.nextInt());

        Arrays.sort(shotArray,new RangeComparator());
        Arrays.sort(fieldArray,new RangeComparator());
        
        int shotPointer=0,fieldPointer=0;
        
        while(fieldPointer<m && shotPointer <n){
            if(fieldArray[fieldPointer].high<shotArray[shotPointer].low)
                fieldPointer++;
            
            else if(fieldArray[fieldPointer].low>shotArray[shotPointer].high)
                shotPointer++;
            
            else{
                    int countPointer=shotPointer;
                
                    while(countPointer<n && fieldArray[fieldPointer].high>=shotArray[countPointer].low){
                        
                            if(Range.isOverlapping(fieldArray[fieldPointer],shotArray[countPointer]))
                                    count++;
                            
                            countPointer++;
               }
                    fieldPointer++;
            }
            }  
        System.out.println(count);
        }
        
    }     