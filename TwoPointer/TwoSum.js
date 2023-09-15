
// Two Sum , input array should be sorted 

let nums1 = [2, 7, 11, 15], sum1 = 9;;

let nums = [1, 4, 5, 8, 11, 12, 16, 21], sum = 19;


let findTwoSum = (nums) => {

    let left = 0, right = nums.length -1;

    while(left < right) {
        if(nums[left] + nums[right] === sum) {
            return [left, right]
        }
        if(nums[left] + nums[right] < sum) {
            left++;
        }
        if(nums[left] + nums[right] > sum ){
            right--;
        }
    }
}

console.log(findTwoSum(nums))
