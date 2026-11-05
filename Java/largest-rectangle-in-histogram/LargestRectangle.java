import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Random;

public class LargestRectangle {

    static int largestRectangle(int[] heights) {
        Deque<Integer> stack = new ArrayDeque<>();
        int best = 0;
        int n = heights.length;
        for (int i = 0; i <= n; i++) {
            int h = i == n ? 0 : heights[i];
            while (!stack.isEmpty() && heights[stack.peek()] >= h) {
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
        System.out.println(largestRectangle(new int[]{2, 1, 5, 6, 2, 3}));
        System.out.println(largestRectangle(new int[]{2, 4}));
        System.out.println(largestRectangle(new int[]{}));
        System.out.println(largestRectangle(new int[]{3, 3, 3, 3}));

        Random random = new Random(7);
        boolean ok = true;
        for (int t = 0; t < 500; t++) {
            int[] arr = new int[random.nextInt(12)];
            for (int i = 0; i < arr.length; i++) {
                arr[i] = random.nextInt(10);
            }
            if (largestRectangle(arr) != brute(arr)) {
                ok = false;
            }
        }
        System.out.println("random check: " + ok);
    }
}
