import random


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


def brute(matrix, k):
    return sorted(x for row in matrix for x in row)[k - 1]


def random_matrix(n):
    rows = [sorted(random.randint(-20, 20) for _ in range(n)) for _ in range(n)]
    cols = [sorted(rows[r][c] for r in range(n)) for c in range(n)]
    return [[cols[c][r] for c in range(n)] for r in range(n)]


if __name__ == "__main__":
    m = [[1, 5, 9], [10, 11, 13], [12, 13, 15]]
    print(kth_smallest(m, 8))
    print(kth_smallest([[-5]], 1))
    print(kth_smallest([[1, 2], [1, 3]], 2))
    ok = True
    for _ in range(200):
        n = random.randint(1, 6)
        mat = random_matrix(n)
        k = random.randint(1, n * n)
        if kth_smallest(mat, k) != brute(mat, k):
            ok = False
            print("mismatch", mat, k)
            break
    print("random ok" if ok else "random failed")
