public class EditDistance {

    static int distance(String a, String b) {
        return solve(a, b, a.length(), b.length());
    }

    static int solve(String a, String b, int i, int j) {
        if (i == 0) {
            return j;
        }
        if (j == 0) {
            return i;
        }
        if (a.charAt(i - 1) == b.charAt(j - 1)) {
            return solve(a, b, i - 1, j - 1);
        }
        int insert = solve(a, b, i, j - 1);
        int delete = solve(a, b, i - 1, j);
        int replace = solve(a, b, i - 1, j - 1);
        return 1 + Math.min(insert, Math.min(delete, replace));
    }

    public static void main(String[] args) {
        System.out.println(distance("horse", "ros"));
    }
}
