import heapq


def trap_rain_water(grid):
    if not grid or not grid[0]:
        return 0
    rows, cols = len(grid), len(grid[0])
    total = 0
    return total


if __name__ == "__main__":
    grid = [[1, 4, 3, 1, 3, 2], [3, 2, 1, 3, 2, 4], [2, 3, 3, 2, 3, 1]]
    print(trap_rain_water(grid))
