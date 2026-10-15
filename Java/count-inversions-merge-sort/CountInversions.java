import java.util.Arrays;

public class CountInversions {

    static long bruteForce(int[] nums) {
        long count = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] > nums[j]) {
                    count++;
                }
            }
        }
        return count;
    }

    static long mergeCount(int[] a, int[] tmp, int lo, int hi) {
        if (hi - lo < 2) {
            return 0;
        }
        int mid = (lo + hi) / 2;
        long count = mergeCount(a, tmp, lo, mid) + mergeCount(a, tmp, mid, hi);
        int i = lo;
        int j = mid;
        int k = lo;
        while (i < mid && j < hi) {
            if (a[i] <= a[j]) {
                tmp[k++] = a[i++];
            } else {
                tmp[k++] = a[j++];
                count += mid - i;
            }
        }
        while (i < mid) {
            tmp[k++] = a[i++];
        }
        while (j < hi) {
            tmp[k++] = a[j++];
        }
        for (k = lo; k < hi; k++) {
            a[k] = tmp[k];
        }
        return count;
    }

    static long countInversions(int[] nums) {
        int[] copy = Arrays.copyOf(nums, nums.length);
        return mergeCount(copy, new int[nums.length], 0, nums.length);
    }

    public static void main(String[] args) {
        int[] nums = {2, 4, 1, 3, 5};
        System.out.println(bruteForce(nums));
        System.out.println(countInversions(nums));
    }
}
