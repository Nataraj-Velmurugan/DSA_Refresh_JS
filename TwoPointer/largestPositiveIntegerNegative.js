https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/submissions/1152343987/



let nums = [-9, -43, 24, -23, -16, -30, -38, -30]

var findMaxK = function (nums) {

    let largest = -1, length = nums.length;
    for (let i = 0; i < length; i++) {
        if (nums[i] > largest) {
            for (let j = 0; j < length; j++) {
                if (nums[j] == -nums[i] && i != j) {
                    largest = nums[i];
                }
            }
        }
    }
    return largest;

};

console.log(findMaxK(nums))
