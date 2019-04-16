import java.util.Scanner;



public class Solution {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);



        int sum = 0;

        int flag = 0;

        int x = in.nextInt();

        for (int i = 0; i < x; i++) {

            int petrol = in.nextInt();

            int distance = in.nextInt();

            sum += petrol - distance;



            if (sum < 0) {

                sum = 0;

                flag = i + 1;

            }

        }

        System.out.println(flag);



        in.close();

    }

}