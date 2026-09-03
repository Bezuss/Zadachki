def length_of_longest_substring(s):
    pass


def brute_force(s):
    n = len(s)
    best = 0
    for i in range(n):
        seen = set()
        for j in range(i, n):
            if s[j] in seen:
                break
            seen.add(s[j])
            best = max(best, j - i + 1)
    return best


if __name__ == "__main__":
    print(brute_force("abcabcbb"))
