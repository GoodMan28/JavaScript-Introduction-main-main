#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

int main() {
    ll n;
    cin >> n;
    vector<pair<ll,ll>> nums(n);
    for(auto &it : nums) {
        ll x, y;
        cin >> x >> y;
        it = {x,y};
    }
    // for(auto it : nums) {
    //     cerr << it.first << " " << it.second << endl;
    // }
    // now we will be generating the subsets of the vector and calculating the ans
    ll ans = LLONG_MAX;
    for(ll i = 1; i < pow(2,n); i++) {
        ll g_prod = 1;
        ll t_sum = 0;
        for(ll j = 0; j < n; j++) {
            if(i & (1 << j)) {
                g_prod *= nums[j].first;
                t_sum += nums[j].second;
            }
        }
        ans = min(ans, abs(g_prod - t_sum));
    }

    cout << ans << endl;
}