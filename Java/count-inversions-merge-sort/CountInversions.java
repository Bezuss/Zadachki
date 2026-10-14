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

    public static void main(String[] args) {
        System.out.println(bruteForce(new int[]{2, 4, 1, 3, 5}));
    }
}
