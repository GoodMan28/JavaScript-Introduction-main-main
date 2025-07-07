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
        if(n == 2) {
            ll a = nums[0];
            ll b = nums[1];
            ll ans = a + min(a, min(a,b));
            cout << ans << endl;
        }
        else if(n > 2) {
            // either make the 1st index zerp
            ll ans1 = nums[0] + nums[1];
            // or make the 2nd index zerp
            ll ans21 = nums[0] + nums[2] + min(nums[1], (nums[0] + nums[2]));
            ll ans22 = nums[0] + min(nums[0], (nums[1] + nums[2]));
            ll ans2 = min(ans21, ans22);
            cout << min(ans1, ans2) << endl;
        }
    }
}