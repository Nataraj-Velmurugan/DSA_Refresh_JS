// https://leetcode.com/problems/contains-duplicate-ii/description/

let nums =[1,2,3,1], k = 3


let containsNearbyDuplicate = function(nums, k) {
    const hasmap = new Map();
    for (let i = 0; i < nums.length; i++) {
        // Check if the difference betweend duplicates is less than k
        if (i - hasmap.get(nums[i]) <= k) {
            return true;
        }
        hasmap.set(nums[i], i);
    }
    return false;
};
