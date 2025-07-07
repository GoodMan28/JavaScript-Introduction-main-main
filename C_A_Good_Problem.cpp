#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll n, l, r, k;
        cin >> n >> l >> r >> k;
        if(l == 0) cout << 0 << endl;
        else if(n & 1)  cout << l << endl;
        else {
            // we will find a such that the a+1 is a power of two and the least one of them
            ll n1 = 0;
            ll n2 = 0; // number of strict digits in bith the numbers
            while(l != 0) {
                n1++;
                l = (l >> 1);
            }
            while(r != 0) {
                n2++;
                r = (r >> 1);
            }
            if(n1 == n2) {
                cout << -1 << endl;
                continue;
            }
            int ni = min(n1, n2);
            int val = 0;
            for(int i = 0; i < ni; i++) {
                val = (2*val) + 1;
            }
            ll a = val;
            ll b = val + 1;
            if(k <= (n/2)) cout << a << endl;
            else cout << b << endl;
        }
    }
}