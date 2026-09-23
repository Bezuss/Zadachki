def combination_sum(candidates, target):
    result = []
    candidates = sorted(candidates)

    def backtrack(start, path, remaining):
        pass

    backtrack(0, [], target)
    return result


if __name__ == "__main__":
    print(combination_sum([2, 3, 6, 7], 7))
