import heapq


def trap_rain_water(grid):
    if not grid or not grid[0]:
        return 0
    rows, cols = len(grid), len(grid[0])
    visited = [[False] * cols for _ in range(rows)]
    heap = []
    for r in range(rows):
        for c in range(cols):
            if r in (0, rows - 1) or c in (0, cols - 1):
                heapq.heappush(heap, (grid[r][c], r, c))
                visited[r][c] = True
    total = 0
    while heap:
        height, r, c = heapq.heappop(heap)
        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and not visited[nr][nc]:
                visited[nr][nc] = True
                total += height - grid[nr][nc]
                heapq.heappush(heap, (max(height, grid[nr][nc]), nr, nc))
    return total


if __name__ == "__main__":
    grid = [[1, 4, 3, 1, 3, 2], [3, 2, 1, 3, 2, 4], [2, 3, 3, 2, 3, 1]]
    print(trap_rain_water(grid))
