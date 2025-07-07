#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll n;
        cin >> n;
        vector<ll> a(n);
        for(auto &it : a) cin >> it;
        vector<ll> ans;
        for(ll i = 0; i < n-1; i++) {
            ans.push_back(a[i]);
            for(ll j = i+1; j < n; j++) {
                if(a[i] > a[j]) {
                    ans.push_back(a[j]);
                    break;
                }
            }
            if(ans.size() == 2) {
                break;
            }
            else {
                ans.pop_back();
            }
        }
        if(ans.size() == 2) {
            cout << "YES" << endl;
            cout << 2 << endl;
            cout << ans[0] << " " << ans[1] << endl;
        }
        else {
            cout << "NO" << endl;
        }
    }
}