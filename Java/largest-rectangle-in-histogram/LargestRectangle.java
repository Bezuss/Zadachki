public class LargestRectangle {

    static int largestRectangle(int[] heights) {
        int best = 0;
        for (int i = 0; i < heights.length; i++) {
            int min = heights[i];
            for (int j = i; j < heights.length; j++) {
                min = Math.min(min, heights[j]);
                best = Math.max(best, min * (j - i + 1));
            }
        }
        return best;
    }

    public static void main(String[] args) {
        System.out.println(largestRectangle(new int[]{2, 1, 5, 6, 2, 3}));
    }
}
