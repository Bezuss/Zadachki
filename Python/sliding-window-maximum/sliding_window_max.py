from collections import deque


def max_sliding_window(nums, k):
    n = len(nums)
    if n == 0 or k == 0:
        return []
    k = min(k, n)
    dq = deque()
    result = []
    for i, val in enumerate(nums):
        while dq and dq[0] <= i - k:
            dq.popleft()
        while dq and nums[dq[-1]] < val:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result


if __name__ == "__main__":
    print(max_sliding_window([1, 3, -1, -3, 5, 3, 6, 7], 3))
    print(max_sliding_window([9, 8, 7, 6], 2))
    print(max_sliding_window([1], 1))
    print(max_sliding_window([], 0))
    print(max_sliding_window([4, -2, 5, 1, 8, 3], 4))
