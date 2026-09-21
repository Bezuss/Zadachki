from collections import deque
import random


def max_sliding_window(nums, k):
    n = len(nums)
    if n == 0 or k == 0:
        return []
    if k > n:
        k = n
    dq = deque()
    result = []
    for i in range(n):
        while dq and dq[0] <= i - k:
            dq.popleft()
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result


def max_sliding_window_brute(nums, k):
    n = len(nums)
    return [max(nums[i:i+k]) for i in range(n - k + 1)]


def run_random_tests(trials=200):
    for _ in range(trials):
        n = random.randint(1, 20)
        nums = [random.randint(-10, 10) for _ in range(n)]
        k = random.randint(1, n)
        a = max_sliding_window(nums, k)
        b = max_sliding_window_brute(nums, k)
        assert a == b, (nums, k, a, b)
    print("random tests passed")


if __name__ == "__main__":
    nums = [1, 3, -1, -3, 5, 3, 6, 7]
    k = 3
    print(max_sliding_window(nums, k))
    print(max_sliding_window_brute(nums, k))

    print(max_sliding_window([9, 8, 7, 6], 2))
    print(max_sliding_window([1], 1))

    run_random_tests()
