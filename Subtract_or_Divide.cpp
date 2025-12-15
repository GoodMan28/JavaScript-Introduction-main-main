#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll n;
        cin >> n;
        if(n % 2) {
            cout << (n-1)/2 + 1 << endl;
        }
        else {
            ll ans = (n - 2)/2 + 1;
            // now here we will add the number of the number of odd doubles
            if(ans % 2) {
                ans += (ans/2 + 1);
            }
            else {
                ans += (ans/2);
            }

            cout << ans << endl;
        }
    }
}