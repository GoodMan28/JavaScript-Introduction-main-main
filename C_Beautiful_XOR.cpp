#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
void solve(ll a, ll b) {
    if(a < b) {
        cout << -1 << endl;
        return;
    }
    // making the a to the contiguos one's
    ll max_ind = 0;
    ll temp_a = a;
    ll i = 0;
    while(temp_a) {
        if(temp_a ^ 0) {
            max_ind = i;
        }
        i++;
        temp_a = (temp_a >> 1);
    }
    // cout << max_ind << endl;
    ll numa = (((ll)pow(2, max_ind + 1) - 1) ^ a); // this number is used to get at 111111...
    

    // now we need to find the b to get there
    ll numb = (b ^ (ll)(pow(2, max_ind + 1) - 1));
    cout << 2 << endl;
    cout << numa << " " << numb << endl;
}
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll a, b;
        cin >> a >> b;
        solve(a,b);
    }
}