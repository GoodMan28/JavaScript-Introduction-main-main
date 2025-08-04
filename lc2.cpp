#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

int searchFurther(vector<int> &nums, int start, int end, int k)
{
    // here we will find the number of eligible seniors
    // here we will try to maximize the ans
    int ans = start;
    int initial = start;
    int n = end - start + 1;
    int mini = nums[start]; // this is the minimum
    while (start <= end)
    {
        int mid = (start + end) / 2;
        // bool cond = (nums[mid] <= k*mini);
        if (nums[mid] <= k * mini)
        {
            ans = mid;
            // search further
            start = mid + 1;
        }
        else
        {
            // explore the lesser values
            end = mid - 1;
        }
    }
    return ans - initial + 1;
}
// int searchBack(vector<int>& nums, int start, int end, int k) {
//     // here we will search for the lowest index that fulfills  the conditon
//     // here we will try to minimize thr answer
//     int ans = end;
//     int initial = end;
//     int n = end - start + 1;
//     int maxi = nums[end]; // this is the maximum
//     while(start <= end) {
//         int mid = (start + end)/2;
//         bool cond = (maxi <= k*nums[mid]);
//         if(maxi <= k*nums[mid]) {
//             ans = mid;
//             // here we will find the smallest one
//             end = mid - 1;
//         }
//         else {
//             // explore the nedxt half
//             start = mid + 1;
//         }
//     }
//     return initial - ans + 1;
// }
int minRemoval(vector<int> &nums, int k)
{
    int n = nums.size();
    sort(nums.begin(), nums.end());
    // we will find the max senior / junior holding elemennt
    int ans = INT_MIN;
    for (int i = 0; i < n; i++)
    {
        int temp1 = searchFurther(nums, i, n - 1, k);
        cerr << temp1 << endl;
        // int temp2 = searchBack(nums, 0, i, k);
        ans = max(ans, temp1);
        // ans = max(ans, temp2);
    }

    return n - ans;
}

int main()
{
    vector<int> nums = {1, 6,2,9};
    auto ans = minRemoval(nums, 3);
    cout << ans;
}