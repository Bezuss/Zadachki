public class NumberOfIslands {

    public static int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        int rows = grid.length;
        int cols = grid[0].length;
        int count = 0;

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == '1') {
                    count++;
                }
            }
        }
        return count;
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
