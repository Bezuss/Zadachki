import java.util.ArrayDeque;
import java.util.Deque;

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
                    bfs(grid, visited, r, c);
                }
            }
        }
        return count;
    }

    private static void bfs(char[][] grid, boolean[][] visited, int startR, int startC) {
        int rows = grid.length;
        int cols = grid[0].length;
        Deque<int[]> queue = new ArrayDeque<>();
        queue.add(new int[]{startR, startC});
        visited[startR][startC] = true;

        int[][] dirs = {{1,0},{-1,0},{0,1},{0,-1}};

        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            for (int[] d : dirs) {
                int nr = cur[0] + d[0];
                int nc = cur[1] + d[1];
                if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;
                if (visited[nr][nc] || grid[nr][nc] != '1') continue;
                visited[nr][nc] = true;
                queue.add(new int[]{nr, nc});
            }
        }
    }

    public static void main(String[] args) {
        char[][] grid1 = {
            {'1','1','0','0'},
            {'1','1','0','0'},
            {'0','0','1','0'},
            {'0','0','0','1'}
        };
        System.out.println(numIslands(grid1));

        char[][] grid2 = {
            {'1','1','1'},
            {'0','1','0'},
            {'1','0','1'}
        };
        System.out.println(numIslands(grid2));

        char[][] grid3 = {
            {'0','0'},
            {'0','0'}
        };
        System.out.println(numIslands(grid3));

        char[][] grid4 = {
            {'1'}
        };
        System.out.println(numIslands(grid4));
    }
}
