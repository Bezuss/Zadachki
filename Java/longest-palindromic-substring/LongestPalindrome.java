public class LongestPalindrome {

    public static String longestPalindrome(String s) {
        if (s == null || s.length() == 0) return "";
        int start = 0, end = 0;
        for (int i = 0; i < s.length(); i++) {
            int[] odd = expand(s, i, i);
            if (odd[1] - odd[0] > end - start) {
                start = odd[0];
                end = odd[1];
            }
            int[] even = expand(s, i, i + 1);
            if (even[1] - even[0] > end - start) {
                start = even[0];
                end = even[1];
            }
        }
        return s.substring(start, end + 1);
    }

    static int[] expand(String s, int lo, int hi) {
        while (lo >= 0 && hi < s.length() && s.charAt(lo) == s.charAt(hi)) {
            lo--;
            hi++;
        }
        return new int[]{lo + 1, hi - 1};
    }

    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad"));
        System.out.println(longestPalindrome("cbbd"));
        System.out.println(longestPalindrome("a"));
        System.out.println(longestPalindrome(""));
        System.out.println(longestPalindrome("racecarxyz"));
        System.out.println(longestPalindrome("aaaaaaa"));
        System.out.println(longestPalindrome("ac"));
    }
}
