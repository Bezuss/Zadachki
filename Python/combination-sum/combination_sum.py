def combination_sum(candidates, target):
    result = []
    candidates = sorted(candidates)

    def backtrack(start, path, remaining):
        if remaining == 0:
            result.append(list(path))
            return
        for i in range(start, len(candidates)):
            c = candidates[i]
            if c > remaining:
                break
            path.append(c)
            backtrack(i, path, remaining - c)
            path.pop()

    backtrack(0, [], target)
    return result


def combination_sum_unique(candidates, target):
    result = []
    candidates = sorted(candidates)

    def backtrack(start, path, remaining):
        if remaining == 0:
            result.append(list(path))
            return
        prev = None
        for i in range(start, len(candidates)):
            c = candidates[i]
            if c > remaining:
                break
            if c == prev:
                continue
            path.append(c)
            backtrack(i + 1, path, remaining - c)
            path.pop()
            prev = c

    backtrack(0, [], target)
    return result


if __name__ == "__main__":
    tests = [
        ([2, 3, 6, 7], 7),
        ([2, 3, 5], 8),
        ([2], 1),
    ]
    for cands, t in tests:
        print(cands, t, "->", combination_sum(cands, t))

    dup_tests = [
        ([10, 1, 2, 7, 6, 1, 5], 8),
        ([2, 5, 2, 1, 2], 5),
    ]
    for cands, t in dup_tests:
        print(cands, t, "->", combination_sum_unique(cands, t))
