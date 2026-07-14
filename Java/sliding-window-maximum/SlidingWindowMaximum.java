import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class SlidingWindowMaximum {

    public static int[] maxSlidingWindowBrute(int[] nums, int k) {
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
        int n = nums.length;
        int[] result = new int[n - k + 1];
        Deque<Integer> deque = new ArrayDeque<>();
        int idx = 0;
        for (int i = 0; i < n; i++) {
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
        int[] nums = {1, 3, -1, -3, 5, 3, 6, 7};
        int k = 3;
        System.out.println(Arrays.toString(maxSlidingWindowBrute(nums, k)));
        System.out.println(Arrays.toString(maxSlidingWindow(nums, k)));
    }
}
