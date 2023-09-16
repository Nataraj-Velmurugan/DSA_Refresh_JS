// removeElement  by swapping

let nums = [5, 3, 2, 3, 1, 3, 2, 4, 3, 4];

let target = 3;


let removeElements = (nums, target) => {
    let left=0, right = 0;

    while(right <= nums.length-1) {
       if(nums[right] !== target ) nums[left++] = nums[right];
       right++
    }

    nums.splice(left, right-left)
    return nums
}

console.log(removeElements(nums, target))
