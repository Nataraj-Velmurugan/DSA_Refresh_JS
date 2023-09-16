// Move zeros to right

let nums = [3, 0, 4, 5, 0, 0, 1];

let moveZeros = (nums) => {
    let left = 0, right = 0;

    while (right < nums.length) {
        let temp;
        if( nums[right] !=0 ) {
           temp = nums[left];
            nums[left] = nums[right]
            nums[right] = temp
            left++;
        }
        right++;
        console.log(nums)
    }

    return nums
}

console.log(moveZeros(nums))
