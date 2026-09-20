from collections import deque


def max_sliding_window(nums, k):
    n = len(nums)
    if n == 0 or k == 0:
        return []
    dq = deque()
    result = []
    for i in range(n):
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result


if __name__ == "__main__":
    nums = [1, 3, -1, -3, 5, 3, 6, 7]
    k = 3
    print(max_sliding_window(nums, k))
