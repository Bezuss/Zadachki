def length_of_longest_substring(s):
    last_seen = {}
    start = 0
    best = 0
    for i, ch in enumerate(s):
        if ch in last_seen and last_seen[ch] >= start:
            start = last_seen[ch] + 1
        last_seen[ch] = i
        best = max(best, i - start + 1)
    return best


def length_of_longest_substring_with_span(s):
    last_seen = {}
    start = 0
    best = 0
    best_start = 0
    for i, ch in enumerate(s):
        if ch in last_seen and last_seen[ch] >= start:
            start = last_seen[ch] + 1
        last_seen[ch] = i
        if i - start + 1 > best:
            best = i - start + 1
            best_start = start
    return s[best_start:best_start + best]


if __name__ == "__main__":
    tests = ["abcabcbb", "bbbbb", "pwwkew", "", " ", "dvdf", "anviaj"]
    for t in tests:
        print(repr(t), "->", length_of_longest_substring(t), repr(length_of_longest_substring_with_span(t)))
