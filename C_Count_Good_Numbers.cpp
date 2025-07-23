#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
// number of multiples of 2,3,5,7 in range 2 to n
ll solve(ll n) {
    // first adding the individual contri
    ll count = 0;
    count += ((n/2) + (n/3) + (n/5) + (n/7));

    // now subtracting the double contributions
    count -= ((n/6) + (n/10) + (n/14) + (n/15) + (n/21) + (n/35));

    // again adding the triple contribution
    count += ((n/105) + (n/70) + (n/42) + (n/30));

    // again removing the quad contri
    count -= (n/210);

    return count;
}
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll l, r;
        cin >> l >> r;
        cout << (r-l+1) - (solve(r) - solve(l-1)) << endl;
    }
}