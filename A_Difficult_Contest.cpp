#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

int main() {
    ll t;
    cin >> t;
    while(t--) {
        string s;
        cin >> s;
        ll n = s.size();
        string ans1, ans2; // the first one will only contain T and other will contain other letters
        for(ll i = 0; i < n; i++) {
            if(s[i] == 'T') ans1 += 'T';
            else {
                ans2 += s[i];
            }
        }
        string ans = ans1 + ans2;
        cout << ans << endl;
    }
}