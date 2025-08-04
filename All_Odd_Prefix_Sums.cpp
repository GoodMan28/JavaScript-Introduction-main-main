#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll n;
        cin >> n;
        vector<int> nums(n);
        for(auto &it : nums) cin >> it;
        ll cnt = 0;
        for(auto it : nums) {
            if(it % 2) {
                cnt++;
            }
        }

        if(cnt == 1) cout << "Yes" << endl;
        else cout << "No" << endl;
    }
}