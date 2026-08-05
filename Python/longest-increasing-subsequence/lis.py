import bisect


def length_of_lis(nums):
    tails = []
    for x in nums:
        pos = bisect.bisect_left(tails, x)
        if pos == len(tails):
            tails.append(x)
        else:
            tails[pos] = x
    return len(tails)


def reconstruct_lis(nums):
    if not nums:
        return []
    n = len(nums)
    tails_idx = []
    prev = [-1] * n
    for i, x in enumerate(nums):
        pos = bisect.bisect_left([nums[k] for k in tails_idx], x)
        if pos == len(tails_idx):
            tails_idx.append(i)
        else:
            tails_idx[pos] = i
        if pos > 0:
            prev[i] = tails_idx[pos - 1]
    seq = []
    k = tails_idx[-1]
    while k != -1:
        seq.append(nums[k])
        k = prev[k]
    return seq[::-1]


if __name__ == "__main__":
    tests = [
        [10, 9, 2, 5, 3, 7, 101, 18],
        [],
        [7, 7, 7, 7],
        [0, 1, 0, 3, 2, 3],
        [4, 10, 4, 3, 8, 9],
    ]
    for t in tests:
        length = length_of_lis(t)
        seq = reconstruct_lis(t)
        print(t, "->", length, seq)

    assert length_of_lis([10, 9, 2, 5, 3, 7, 101, 18]) == 4
    assert length_of_lis([]) == 0
    assert length_of_lis([7, 7, 7, 7]) == 1
    assert length_of_lis([0, 1, 0, 3, 2, 3]) == 4
    print("all good")
