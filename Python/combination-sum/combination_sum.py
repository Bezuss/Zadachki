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


def combination_sum2(candidates, target):
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
    print(combination_sum([2, 3, 6, 7], 7))
    print(combination_sum2([10, 1, 2, 7, 6, 1, 5], 8))
