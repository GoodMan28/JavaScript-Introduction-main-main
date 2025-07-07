#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
void solve(ll a, ll b, ll x, ll y) {
    ll diff = b - a;
    if(diff == 0) {
        cout << 0 << endl;
        return;
    }
    if(b == a + 1) {
        if(a%2) {
            // we can only use addition
            cout << x << endl;
            return;
        }
        else {
            // we can use both xor and add
            cout << min(x, y) << endl;
            return;
        }
    }
    if(a == b + 1) {
        if(a % 2) {
            cout << y << endl;
            return;
        }
        else {
            cout << -1 << endl;
            return;
        }
    }
    if(a < b) {
        if(x < y) {
            cout << diff * x << endl;
        }
        else {
            if(a % 2) {
                int odd = (diff+1)/2;
                int even = (diff)/2;
                cout << odd*x + even*y << endl;
            }
            else {
                int even = (diff+1)/2;
                int odd = (diff)/2;
                cout << odd*x + even*y << endl;
            }
            return;
        }
    }
    else cout << -1 << endl;
}
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll a, b, x, y;
        cin >> a >> b >> x >> y;
        solve(a, b, x, y);
    }
}