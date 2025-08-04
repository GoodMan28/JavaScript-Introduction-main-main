#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll n, c;
        cin >> n >> c;
        vector<ll> a(n);
        for(auto &it : a) cin >> it;
        vector<ll> kids;
        for(auto it : a) {
            if(it <= c) kids.push_back(it);
        }
        sort(kids.begin(), kids.end());
        ll free = 0;
        while(!kids.empty()) {
            // removig the kids which are more than c (evidently they will be at yhe last)
            while(!kids.empty() && kids.back() > c) {
                kids.pop_back();
            }
            if(!kids.empty()) {
                free++;
                kids.pop_back();
            }
            // now doubling the elemnts
            for(auto &it : kids) {
                it = it * 2;
            }
        }

        cout << n - free << endl;
    }
}