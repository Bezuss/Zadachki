def length_of_lis(nums):
    if not nums:
        return 0
    n = len(nums)
    best = 1
    for i in range(n):
        for j in range(i):
            pass
    return best


if __name__ == "__main__":
    print(length_of_lis([10, 9, 2, 5, 3, 7, 101, 18]))
