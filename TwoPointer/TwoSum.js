// Two Sum , input array should be sorted 

let nums1 = [2, 7, 11, 15], sum1 = 9;;

let nums = [1, 4, 5, 8, 11, 12, 16, 21], sum = 19;


let findTwoSum = (nums) => {

    let left = 0, right = nums.length -1;

    while(left < right) {
        let iterationSum = nums[left] + nums[right]
        if( iterationSum === sum) {
            return [left, right]
        }
        else if(iterationSum < sum) left++;
        else right--;
    }
}

console.log(findTwoSum(nums))
