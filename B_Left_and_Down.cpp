#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll a, b, k;
        cin >> a >> b >> k;

        ll g = gcd(a, b); // gcd will give the number of steps
        ll step1 = a/g;
        ll step2 = b/g;
        if(step1 <= k && step2 <= k) {
            cout << 1 << endl;
        }
        else {
            cout << 2 << endl;
        }
    }
}