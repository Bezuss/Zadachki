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


def assert_same_combos(actual, expected):
    norm = lambda combos: sorted(sorted(c) for c in combos)
    assert norm(actual) == norm(expected), (actual, expected)


if __name__ == "__main__":
    assert_same_combos(
        combination_sum([2, 3, 6, 7], 7),
        [[2, 2, 3], [7]],
    )
    assert_same_combos(
        combination_sum([2, 3, 5], 8),
        [[2, 2, 2, 2], [2, 3, 3], [3, 5]],
    )
    assert combination_sum([2], 1) == []

    assert_same_combos(
        combination_sum_unique([10, 1, 2, 7, 6, 1, 5], 8),
        [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]],
    )
    assert_same_combos(
        combination_sum_unique([2, 5, 2, 1, 2], 5),
        [[1, 2, 2], [5]],
    )

    print(combination_sum([2, 3, 6, 7], 7))
    print(combination_sum([2, 3, 5], 8))
    print(combination_sum_unique([10, 1, 2, 7, 6, 1, 5], 8))
    print("all tests passed")
