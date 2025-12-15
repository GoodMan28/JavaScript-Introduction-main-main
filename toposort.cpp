#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
vector<int> topoSort(int n, vector<vector<int>> &edges)
{
    // code here
    vector<int> inDegree(n, 0);
    vector<int> ans;
    vector<vector<int>> adj(n);
    for (auto it : edges)
    {
        inDegree[it[1]]++;
        adj[it[0]].push_back(it[1]);
    }

    queue<int> q;
    for (int i = 0; i < n; i++)
    {
        if (inDegree[i] == 0)
            q.push(i);
    }

    while (!q.empty())
    {
        int top = q.front();
        q.pop();
        ans.push_back(top);

        for (auto it : adj[top])
        {
            inDegree[it]--;
            if (inDegree[it] == 0)
                q.push(it);
        }
    }

    return ans;
}

int main()
{
    int n = 11;
    vector<vector<int>> edges = { {0, 1},
                                  {1, 2},
                                  {2, 3},
                                  {3, 6},
                                  {4, 5},
                                  {5, 7},
                                  {3, 4},
                                  {5, 6},
                                  {8, 1},
                                  {8, 9},
                                  {9, 10},
                                  {8, 10} };
    vector<int> ans = topoSort(11, edges);
    for(auto it : ans) {
        cout << it << " ";
    }
    cout << endl;
}