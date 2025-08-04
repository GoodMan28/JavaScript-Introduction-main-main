#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll n;
        cin >> n;
        vector<pair<ll, ll>> a, b, c;
        for(int i = 0; i < n; i++) {
            ll x;
            cin >> x;
            a.push_back({x, i});
        }
        for(int i = 0; i < n; i++) {
            ll x;
            cin >> x;
            b.push_back({x, i});
        }
        for(int i = 0; i < n; i++) {
            ll x;
            cin >> x;
            c.push_back({x, i});
        }

        // making them in descending order
        sort(a.begin(), a.end(), [](const pair<ll, ll> pair1, const pair<ll, ll> pair2) {
            if(pair1.first > pair2.first) return true;
            else if(pair1.first == pair2.first) return pair1.second > pair2.second;
            else return false;
        });
        
        sort(b.begin(), b.end(), [](const pair<ll, ll> pair1, const pair<ll, ll> pair2) {
            if(pair1.first > pair2.first) return true;
            else if(pair1.first == pair2.first) return pair1.second > pair2.second;
            else return false;
        });

        sort(c.begin(), c.end(), [](const pair<ll, ll> pair1, const pair<ll, ll> pair2) {
            if(pair1.first > pair2.first) return true;
            else if(pair1.first == pair2.first) return pair1.second > pair2.second;
            else return false;
        });

        ll maxi = 0;
        for(ll i = 0; i < 3; i++) {
            ll ind1 = a[i].second;
            ll val1 = a[i].first;
            for(ll j = 0; j < 3; j++) {
                ll ind2 = b[j].second;
                ll val2 = b[j].first;
                for(ll k = 0; k < 3; k++) {
                    ll ind3 = c[k].second;
                    ll val3 = c[k].first;
                    if(ind1 != ind2 && ind2 != ind3 && ind1 != ind3) {
                        maxi = max(maxi , val1 + val2 + val3);
                    }
                }
            }
        }

        cout << maxi << endl;
    }
}