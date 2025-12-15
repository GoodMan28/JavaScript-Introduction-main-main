#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
vector<pair<int, int>> bfs(int row, int col, vector<vector<int>> &grid, vector<vector<int>> &visited)
{
    vector<pair<int, int>> ans;
    int n = grid.size();
    int m = grid[0].size();
    // first we will mark the starting node as visited
    visited[row][col] = 1;
    queue<pair<int, int>> q;
    q.push({row, col});

    while (!q.empty())
    {
        auto top = q.front();
        q.pop();
        ans.push_back(top);
        int r1 = top.first;
        int c1 = top.second;
        // putting the right and down values in the q because the left and up values have been into the queue
        vector<int> delrow = {0, 1, 0, -1};
        vector<int> delcol = {1, 0, -1, 0};

        for (int i = 0; i < 4; i++)
        {
            int r = r1 + delrow[i];
            int c = c1 + delcol[i];
            if (r >= 0 && r < n && c >= 0 && c < m)
            {
                if (!visited[r][c] && grid[r][c] == 1)
                {
                    visited[r][c] = 1;
                    q.push({r, c});
                }
            }
        }
    }
    return ans;
}
int countDistinctIslands(vector<vector<int>> &grid)
{
    // code here
    int n = grid.size();
    int m = grid[0].size();
    vector<vector<int>> visited(n, vector<int>(m, 0));
    set<vector<pair<int, int>>> st;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            if (!visited[i][j] && grid[i][j] == 1)
            {
                auto dimens = bfs(i, j, grid, visited);
                pair<int, int> base = {i, j};
                // now substracting the coordinates from the base
                for (auto &it : dimens)
                {
                    it.first = it.first - base.first;
                    it.second = it.second - base.second;
                }
                
                st.insert(dimens); // inserting the normalized dimensions
            }
        }
    }
    return st.size();
}


int main() {
    vector<vector<int>> grid;
    grid = {{1,1,0,1,1},{1,0,0,0,0},{0,0,0,0,1},{1,1,0,1,1}};
    // grid = {{1,1,0,1,1}, {1,0,0,0,0}, {0,0,0,0,0}, {0,0,0,1,1}, {0,0,0,1,0}};
    cout << countDistinctIslands(grid) << endl;
}