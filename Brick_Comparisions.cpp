#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll n;
        cin >> n;
        vector<ll> nums(n);
        for(auto &it : nums) cin >> it;
        ll pos = 0;
        ll maxi = INT_MIN;
        for(ll i = 0; i < n; i++) {
            if(maxi < nums[i]) {
                maxi = nums[i];
                pos = i;
            }
        }

        cout << pos + 1 << endl;
    }
}