#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll n;
        cin >> n;
        string str;
        cin >> str;
        int cnt_0 = 0;
        int cnt_1 = 0;
        for(int i = 0; i < n; i++) {
            if(str[i] == '0') cnt_0++;
            else cnt_1++;
        }
        // simply removing all the 0's
        cout << cnt_0 << endl;
        for(ll i = 0; i < n; i++) {
            if(str[i] == '0') cout << i + 1 << " ";
        }
        cout << endl;
    }
}