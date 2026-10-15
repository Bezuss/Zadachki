import java.util.Arrays;
import java.util.Random;

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
        int mid = (lo + hi) >>> 1;
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
        System.arraycopy(tmp, lo, a, lo, hi - lo);
        return count;
    }

    static long countInversions(int[] nums) {
        int[] copy = Arrays.copyOf(nums, nums.length);
        return mergeCount(copy, new int[nums.length], 0, nums.length);
    }

    public static void main(String[] args) {
        int[] nums = {2, 4, 1, 3, 5};
        System.out.println(countInversions(nums));
        System.out.println(countInversions(new int[]{}));
        System.out.println(countInversions(new int[]{5, 4, 3, 2, 1}));
        System.out.println(countInversions(new int[]{1, 1, 1}));

        Random random = new Random(7);
        for (int t = 0; t < 200; t++) {
            int[] arr = new int[random.nextInt(30)];
            for (int i = 0; i < arr.length; i++) {
                arr[i] = random.nextInt(10);
            }
            if (bruteForce(arr) != countInversions(arr)) {
                System.out.println("mismatch " + Arrays.toString(arr));
                return;
            }
        }
        System.out.println("all ok");
    }
}
