import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class SlidingWindowMaximum {

    public static int[] maxSlidingWindowBrute(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) return new int[0];
        int n = nums.length;
        int[] result = new int[n - k + 1];
        for (int i = 0; i <= n - k; i++) {
            int max = nums[i];
            for (int j = i; j < i + k; j++) {
                if (nums[j] > max) max = nums[j];
            }
            result[i] = max;
        }
        return result;
    }

    public static int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) return new int[0];
        int n = nums.length;
        if (k > n) k = n;
        int[] result = new int[n - k + 1];
        Deque<Integer> deque = new ArrayDeque<>();
        int idx = 0;
        for (int i = 0; i < n; i++) {
            while (!deque.isEmpty() && deque.peekFirst() <= i - k) {
                deque.pollFirst();
            }
            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
                deque.pollLast();
            }
            deque.addLast(i);
            if (i >= k - 1) {
                result[idx++] = nums[deque.peekFirst()];
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[][] testArrays = {
            {1, 3, -1, -3, 5, 3, 6, 7},
            {7, 6, 5, 4, 3, 2, 1},
            {9, 11},
            {4, -2},
            {1},
            {5, 5, 5, 5, 5},
            {7, 2, 4}
        };
        int[] ks = {3, 3, 2, 1, 1, 3, 2};

        for (int t = 0; t < testArrays.length; t++) {
            int[] nums = testArrays[t];
            int k = ks[t];
            int[] brute = maxSlidingWindowBrute(nums, k);
            int[] fast = maxSlidingWindow(nums, k);
            System.out.println("nums=" + Arrays.toString(nums) + " k=" + k);
            System.out.println("  brute = " + Arrays.toString(brute));
            System.out.println("  fast  = " + Arrays.toString(fast));
            System.out.println("  match = " + Arrays.equals(brute, fast));
        }
    }
}
