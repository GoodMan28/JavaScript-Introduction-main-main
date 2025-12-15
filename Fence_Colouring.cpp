#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int main() {
    ll t;
    cin >> t;
    while(t--) {
        ll n;
        cin >> n;
        vector<ll> nums(n);
        for(auto &it : nums) cin >> it;
        // we will find the maximum frequency of any number
        unordered_map<ll,ll> mpp;
        for(auto it : nums) {
            mpp[it]++;
        }
        // finding the maximum frequency
        ll maxi = INT_MIN;
        for(auto it : mpp) {
            maxi = max(maxi, it.second);
        }

        // checking if the maximum frequency is 1 or not
        // otherwise the answer is as obvoius
        bool edge = false;
        ll freq1 = 0;
        for(auto it : mpp) {
            if(it.first == 1) {
                freq1 = it.second;
                if(it.second == maxi) {
                    edge = true;
                    break;
                }
            }
        }

        if(edge) {
            cout << n - maxi << endl;
        }
        else {
            // here we will compare both the cases
            ll opt1 = 1 + (n-maxi);
            ll opt2 = (n-freq1);

            cout << min(opt1, opt2) << endl;
        }
    }
}