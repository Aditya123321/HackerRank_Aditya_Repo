import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int k = sc.nextInt();

        int[] remainders = new int[k];
        for (int i = 0; i < n; i++) {
            int a = sc.nextInt();
            remainders[a % k]++;
        }

        int res = 0;
        for (int i = 0; i * 2 <= k; i++) {
            int x = (k - i) % k;
            if (i == x) {
                res += Math.min(remainders[i], 1);
            } else {
                res += Math.max(remainders[i], remainders[x]);
            }
        }
        System.out.println(res);

        sc.close();
    }
}