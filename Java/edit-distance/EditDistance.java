public class EditDistance {

    static int distance(String a, String b) {
        if (a.length() < b.length()) {
            return distance(b, a);
        }
        int m = b.length();
        int[] prev = new int[m + 1];
        int[] cur = new int[m + 1];
        for (int j = 0; j <= m; j++) {
            prev[j] = j;
        }
        for (int i = 1; i <= a.length(); i++) {
            cur[0] = i;
            for (int j = 1; j <= m; j++) {
                if (a.charAt(i - 1) == b.charAt(j - 1)) {
                    cur[j] = prev[j - 1];
                } else {
                    cur[j] = 1 + Math.min(prev[j - 1], Math.min(prev[j], cur[j - 1]));
                }
            }
            int[] tmp = prev;
            prev = cur;
            cur = tmp;
        }
        return prev[m];
    }

    public static void main(String[] args) {
        String[][] cases = {
            {"horse", "ros"},
            {"intention", "execution"},
            {"", "abc"},
            {"abc", ""},
            {"same", "same"},
            {"kitten", "sitting"}
        };
        for (String[] c : cases) {
            System.out.println(c[0] + " -> " + c[1] + ": " + distance(c[0], c[1]));
        }
    }
}
