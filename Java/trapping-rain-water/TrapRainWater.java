public class TrapRainWater {

    public static int trap(int[] height) {
        if (height == null || height.length < 3) return 0;
        int left = 0, right = height.length - 1;
        int leftMax = 0, rightMax = 0;
        int total = 0;
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    total += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    total += rightMax - height[right];
                }
                right--;
            }
        }
        return total;
    }

    public static void main(String[] args) {
        int[][] tests = {
            {0,1,0,2,1,0,1,3,2,1,2,1},
            {4,2,0,3,2,5},
            {},
            {1},
            {5,4,3,2,1},
            {1,2,3,4,5},
            {2,0,2}
        };
        for (int[] t : tests) {
            System.out.println(java.util.Arrays.toString(t) + " -> " + trap(t));
        }
    }
}
