#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
ll binary2decimal(string s) {
    // moving in the forward direction
    // METHOD 1
    // ll num = 0;
    // for(ll i = 0; i < s.size(); i++) {
    //     num = 2*num + (s[i] - '0');
    // }
    // return num;

    // METHOD 2
    // or in the reverse direction we can travel
    ll pow2 = 1; // this is the power of two
    ll num2 = 0;
    for(ll i = s.size()-1; i >= 0; i--) {
        if(s[i] == '1') {
            // because multiplying with 0 is of no significance
            num2 = num2 + pow2;
        }

        pow2 *= 2;
    }

    return num2;
}
string decimal2binary(ll n) {
    string s;
    while(n != 0) {
        if(n % 2) {
            s.push_back('1');
        }
        else {
            s.push_back('0');
        }
        n /= 2;
    }
    reverse(s.begin(), s.end());
    return s;
}
int main() {
    ll n;
    n = 15;
    cout << decimal2binary(n) << endl;
    cout << binary2decimal("1000") << endl;
}