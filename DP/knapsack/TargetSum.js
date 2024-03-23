// input : N = 5, arr[] = {1, 1, 1, 1, 1}, target = 3
// Output: 5
// Explanation:
// There are 5 ways to assign symbols to
// make the sum of array be target 3.

// -1 + 1 + 1 + 1 + 1 = 3
// +1 – 1 + 1 + 1 + 1 = 3
// +1 + 1 – 1 + 1 + 1 = 3
// +1 + 1 + 1 – 1 + 1 = 3
// +1 + 1 + 1 + 1 – 1 = 3


var findTargetSumWays = function(nums, target) {
    
    let kp = (nums,target, i, sum) => {

      if(sum === target && i == nums.length) return 1;

      if(i >= nums.length) return 0;

      return kp(nums, target, i+1, sum+nums[i]) + kp(nums, target, i+1, sum-nums[i])

    }

    return kp(nums, target, 0, 0)
};
