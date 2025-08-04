#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll n,x,y;
        cin >> n >> x >> y;
        ll cnt = 0;
        for(ll i = 0; i < n; i++) {
            ll temp;
            cin >> temp;
            if(temp <= y && temp >= x) cnt++;
        }

        cout << cnt << endl;
    }
}