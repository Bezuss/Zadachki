import java.util.*;

public class LongestIncreasingSubsequence {

    static int lengthOfLIS(int[] nums) {
        int[] tails = new int[nums.length];
        int size = 0;
        for (int num : nums) {
            int idx = Arrays.binarySearch(tails, 0, size, num);
            if (idx < 0) idx = -idx - 1;
            tails[idx] = num;
            if (idx == size) size++;
        }
        return size;
    }

    static int slowLIS(int[] nums) {
        int[] dp = new int[nums.length];
        int best = 0;
        for (int i = 0; i < nums.length; i++) {
            dp[i] = 1;
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
            }
            best = Math.max(best, dp[i]);
        }
        return best;
    }

    public static void main(String[] args) {
        int[][] cases = {
            {10, 9, 2, 5, 3, 7, 101, 18},
            {0, 1, 0, 3, 2, 3},
            {7, 7, 7, 7},
            {}
        };
        for (int[] c : cases) {
            System.out.println(Arrays.toString(c) + " -> " + lengthOfLIS(c));
        }

        Random rng = new Random(1);
        boolean ok = true;
        for (int t = 0; t < 1000; t++) {
            int[] arr = new int[rng.nextInt(30)];
            for (int i = 0; i < arr.length; i++) arr[i] = rng.nextInt(20) - 10;
            if (lengthOfLIS(arr) != slowLIS(arr)) {
                ok = false;
                System.out.println("mismatch " + Arrays.toString(arr));
            }
        }
        System.out.println(ok ? "random ok" : "random failed");
    }
}
