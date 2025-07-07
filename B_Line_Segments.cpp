#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
ll sqdistance(ll px, ll py, ll qx, ll qy) {
    ll dx = qx - px;
    ll dy = qy - py;
    return dx * dx + dy * dy;
}
bool solve(ll px, ll py, ll qx, ll qy, vector<ll> a) {
    // finding the max
    ll maxi = LLONG_MIN;
    ll sum = 0;
    for(ll i = 0; i < a.size(); i++) {
        maxi = max(maxi, a[i]);
        sum += a[i];
    }
    ll upper = sum;
    sum = sum - maxi;
    ll lower = maxi - sum;
    if(lower < 0) lower = 0;
    ll d = sqdistance(px, py, qx, qy);
    if(d >= lower*lower && d <= upper*upper) return true;
    return false;


    // // we will be using the triangular properties
    // ll d = sqdistance(px, py, qx, qy);
    // if(a.size() == 1) {
    //     if(d == a[0]*a[0]) return true;
    //     return false;
    // }

}
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll px, py, qx, qy;
        ll n;
        cin >> n;
        cin >> px >> py >> qx >> qy;
        vector<ll> a(n);
        for(auto &it : a) cin >> it;

        if(solve(px, py, qx, qy, a)) cout << "Yes" << endl;
        else cout << "No" << endl;
    }
}