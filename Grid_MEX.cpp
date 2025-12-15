#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
vector<ll> rotate(vector<ll> nums) {
    ll n = nums.size();
    ll start = nums[0];
    vector<ll> ans;
    for(ll i = 1; i < n; i++) {
        ans.push_back(nums[i]);
    }
    ans.push_back(start);
    return ans;
}
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll n;
        cin >> n;
        vector<vector<ll>> ans;
        vector<ll> temp;
        for(ll i = 0; i < n; i++) {
            temp.push_back(i);
        }
        for(ll i = 0; i < n; i++) {
            ans.push_back(temp);
            temp = rotate(temp);
        }

        for(ll i = 0; i < n; i++) {
            for(ll j = 0; j < n; j++) {
                cout << ans[i][j] << " ";
            }
            cout << endl;
        }
    }
}