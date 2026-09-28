public class NumberOfIslands {

    public static int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        int rows = grid.length;
        int cols = grid[0].length;
        boolean[][] visited = new boolean[rows][cols];
        int count = 0;

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == '1' && !visited[r][c]) {
                    count++;
                    flood(grid, visited, r, c);
                }
            }
        }
        return count;
    }

    private static void flood(char[][] grid, boolean[][] visited, int r, int c) {
        int rows = grid.length;
        int cols = grid[0].length;
        if (r < 0 || c < 0 || r >= rows || c >= cols) return;
        if (visited[r][c] || grid[r][c] != '1') return;

        visited[r][c] = true;
        flood(grid, visited, r + 1, c);
        flood(grid, visited, r - 1, c);
        flood(grid, visited, r, c + 1);
        flood(grid, visited, r, c - 1);
    }

    public static void main(String[] args) {
        char[][] grid = {
            {'1','1','0','0'},
            {'1','1','0','0'},
            {'0','0','1','0'},
            {'0','0','0','1'}
        };
        System.out.println(numIslands(grid));
    }
}
