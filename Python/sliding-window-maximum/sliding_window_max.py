def max_sliding_window(nums, k):
    result = []
    n = len(nums)
    for i in range(n - k + 1):
        window = nums[i:i+k]
        result.append(max(window))
    return result


if __name__ == "__main__":
    nums = [1, 3, -1, -3, 5, 3, 6, 7]
    k = 3
    print(max_sliding_window(nums, k))
