import heapq


def kth_smallest(matrix, k):
    n = len(matrix)
    heap = []
    for r in range(min(n, k)):
        heap.append((matrix[r][0], r, 0))
    heapq.heapify(heap)
    for _ in range(k - 1):
        val, r, c = heapq.heappop(heap)
        if c + 1 < n:
            heapq.heappush(heap, (matrix[r][c + 1], r, c + 1))
    return heap[0][0]


if __name__ == "__main__":
    m = [[1, 5, 9], [10, 11, 13], [12, 13, 15]]
    print(kth_smallest(m, 8))
    print(kth_smallest([[-5]], 1))
