import java.util.*;

public class Solution2 {

  private static int getMinStepsToGetK(long k,PriorityQueue<Integer> newQueue){
    int count=0;
    while(newQueue.peek()<k) {
      if(newQueue.size()>=2) {
        count++;
        int val = newQueue.poll();
        int val2 = newQueue.poll();
        newQueue.offer(val+((val2)*2));
      }
      else {
        return -1;
      }
    }
    return count;
  }

  public static void main(String[] args) {
    Scanner scanObj = new Scanner(System.in);
    int numOfCookies = scanObj.nextInt();
    long minSweetness = scanObj.nextLong();
    PriorityQueue<Integer> newQueue = new PriorityQueue<Integer>();
    for(int i=0;i<numOfCookies;i++) {
      newQueue.offer(scanObj.nextInt());
    }
    System.out.println(getMinStepsToGetK(minSweetness,newQueue));
  }

}