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
        int[] nums1 = {1, 3, -1, -3, 5, 3, 6, 7};
        int k1 = 3;
        System.out.println(Arrays.toString(maxSlidingWindowBrute(nums1, k1)));
        System.out.println(Arrays.toString(maxSlidingWindow(nums1, k1)));

        int[] nums2 = {7, 6, 5, 4, 3, 2, 1};
        int k2 = 3;
        System.out.println(Arrays.toString(maxSlidingWindowBrute(nums2, k2)));
        System.out.println(Arrays.toString(maxSlidingWindow(nums2, k2)));

        int[] nums3 = {1};
        int k3 = 1;
        System.out.println(Arrays.toString(maxSlidingWindow(nums3, k3)));
    }
}
