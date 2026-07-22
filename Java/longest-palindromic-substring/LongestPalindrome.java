public class LongestPalindrome {

    public static String longestPalindrome(String s) {
        if (s == null || s.length() == 0) return "";
        String best = "";
        for (int i = 0; i < s.length(); i++) {
            String odd = expand(s, i, i);
            if (odd.length() > best.length()) best = odd;
            String even = expand(s, i, i + 1);
            if (even.length() > best.length()) best = even;
        }
        return best;
    }

    static String expand(String s, int lo, int hi) {
        while (lo >= 0 && hi < s.length() && s.charAt(lo) == s.charAt(hi)) {
            lo--;
            hi++;
        }
        return s.substring(lo + 1, hi);
    }

    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad"));
        System.out.println(longestPalindrome("cbbd"));
    }
}
