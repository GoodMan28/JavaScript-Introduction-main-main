#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

vector<vector<int>> generatePermutations(vector<int> nums) {
    vector<vector<int>> ans;
    // we will swap all the indexex withj the 0th index so that all defeat all
    // this gives us the solution in O(n)
    for(int i = 0; i < nums.size(); i++) {
        swap(nums[0], nums[i]);
        ans.push_back(nums);
        swap(nums[0], nums[i]); //undoing the change
    }
    return ans;
}

int main() {
    ll n;
    cin >> n;
    vector<int> nums;
    for(int i = 0; i < n; i++) {
        nums.push_back(i+1);
    }

    
    vector<vector<int>> ans = generatePermutations(nums);
    cout << ans.size() << endl;
    for(auto it : ans) {
        for(auto it2 : it) {
            cout << it2 << " ";
        }
        cout << endl;
    }
    

    
}