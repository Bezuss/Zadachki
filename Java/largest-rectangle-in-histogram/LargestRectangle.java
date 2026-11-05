import java.util.ArrayDeque;
import java.util.Deque;

public class LargestRectangle {

    static int largestRectangle(int[] heights) {
        Deque<Integer> stack = new ArrayDeque<>();
        int best = 0;
        int n = heights.length;
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && heights[stack.peek()] >= heights[i]) {
                int height = heights[stack.pop()];
                int left = stack.isEmpty() ? -1 : stack.peek();
                best = Math.max(best, height * (i - left - 1));
            }
            stack.push(i);
        }
        return best;
    }

    static int brute(int[] heights) {
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
        int[] a = {2, 1, 5, 6, 2, 3};
        System.out.println(largestRectangle(a));
        System.out.println(brute(a));
    }
}
