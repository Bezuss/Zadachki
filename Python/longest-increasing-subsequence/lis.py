import bisect


def length_of_lis(nums):
    if not nums:
        return 0
    n = len(nums)
    dp = [1] * n
    for i in range(n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)


def length_of_lis_fast(nums):
    tails = []
    for x in nums:
        pos = bisect.bisect_left(tails, x)
        if pos == len(tails):
            tails.append(x)
        else:
            tails[pos] = x
    return len(tails)


if __name__ == "__main__":
    tests = [
        [10, 9, 2, 5, 3, 7, 101, 18],
        [],
        [7, 7, 7, 7],
        [0, 1, 0, 3, 2, 3],
    ]
    for t in tests:
        print(t, length_of_lis(t), length_of_lis_fast(t))
