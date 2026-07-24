public class TrapRainWater {

    public static int trapBrute(int[] height) {
        int n = height.length;
        int total = 0;
        for (int i = 0; i < n; i++) {
            int leftMax = 0;
            for (int j = 0; j <= i; j++) {
                leftMax = Math.max(leftMax, height[j]);
            }
            int rightMax = 0;
            for (int j = i; j < n; j++) {
                rightMax = Math.max(rightMax, height[j]);
            }
            total += Math.min(leftMax, rightMax) - height[i];
        }
        return total;
    }

    public static void main(String[] args) {
        int[] h = {0,1,0,2,1,0,1,3,2,1,2,1};
        System.out.println(trapBrute(h));
    }
}
