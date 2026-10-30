import java.util.*;

public class CarFleet {
    static int carFleet(int target, int[] position, int[] speed) {
        int n = position.length;
        Integer[] order = new Integer[n];
        for (int i = 0; i < n; i++) {
            order[i] = i;
        }
        Arrays.sort(order, (a, b) -> position[b] - position[a]);
        int fleets = 0;
        double slowest = 0;
        for (int idx : order) {
            double time = (double) (target - position[idx]) / speed[idx];
            if (time > slowest) {
                fleets++;
                slowest = time;
            }
        }
        return fleets;
    }

    public static void main(String[] args) {
        System.out.println(carFleet(12, new int[]{10, 8, 0, 5, 3}, new int[]{2, 4, 1, 1, 3}));
        System.out.println(carFleet(10, new int[]{3}, new int[]{3}));
    }
}
