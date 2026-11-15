def kth_smallest(matrix, k):
    flat = []
    for row in matrix:
        for x in row:
            flat.append(x)
    flat.sort()
    return flat[k - 1]


if __name__ == "__main__":
    m = [[1, 5, 9], [10, 11, 13], [12, 13, 15]]
    print(kth_smallest(m, 8))
