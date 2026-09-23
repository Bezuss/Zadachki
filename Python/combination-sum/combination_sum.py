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


if __name__ == "__main__":
    print(combination_sum([2, 3, 6, 7], 7))
