#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll n;
        cin >> n;
        vector<ll> a(n), b(n);
        for(auto &it : a) cin >> it;
        for(auto &it : b) cin >> it;
        vector<pair<ll,ll>> nums;
        for(ll i = 0; i < n; i++) {
            nums.push_back({min(a[i],b[i]), max(a[i],b[i])});
        }
        ll ans = 0;
        ll l = 0;
        ll r = 0;
        while(l <= r) {
            if(l == r) {
                r++;
                continue;
            }
            bool cond = 
            
        }
    }
}