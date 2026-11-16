def count_le(matrix, target):
    n = len(matrix)
    count = 0
    r, c = n - 1, 0
    while r >= 0 and c < n:
        if matrix[r][c] <= target:
            count += r + 1
            c += 1
        else:
            r -= 1
    return count


def kth_smallest(matrix, k):
    lo, hi = matrix[0][0], matrix[-1][-1]
    while lo < hi:
        mid = (lo + hi) // 2
        if count_le(matrix, mid) >= k:
            hi = mid
        else:
            lo = mid + 1
    return lo


if __name__ == "__main__":
    m = [[1, 5, 9], [10, 11, 13], [12, 13, 15]]
    print(kth_smallest(m, 8))
    print(kth_smallest([[-5]], 1))
