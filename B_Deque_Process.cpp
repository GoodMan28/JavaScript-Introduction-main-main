#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int main() {
    ll t;
    cin >> t;
    while(t--) {
        bool less = true; // denoting where to select the less one or the more one
        ll n;
        cin >> n;
        vector<ll> a(n);
        for(auto &it : a) cin >> it;
        deque<ll> dq;
        for(auto it : a) {
            dq.push_back(it);
        }
        string q;
        vector<ll> ans;
        while(!dq.empty()) {
            if(less) {
                if(dq.front() < dq.back()) {
                    ans.push_back(dq.front());
                    q.push_back('L');
                    dq.pop_front();
                }
                else {
                    ans.push_back(dq.back());
                    q.push_back('R');
                    dq.pop_back();
                }
            }
            else {
                if(dq.front() > dq.back()) {
                    ans.push_back(dq.front());
                    q.push_back('L');
                    dq.pop_front();
                }
                else {
                    ans.push_back(dq.back());
                    q.push_back('R');
                    dq.pop_back();
                }
            }

            less = !less;
        }

        cout << q << endl;
    }
}