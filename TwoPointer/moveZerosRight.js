// Move zeros to right

let nums = [3, 0, 4, 5, 0, 0, 1];

let moveZeros = (nums) => {
    let left = 0, right = 1;

    while (right < nums.length) {
        let temp;
        if(nums[left] > nums[right]) {
            left++;
            right++;
        }
        else if(nums[left] < nums[right]) {
            temp = nums[left];
            nums[left] = nums[right]
            nums[right] = temp
            left++;
            right++;
        }
        else right++;
    }

    return nums
}

console.log(moveZeros(nums))
