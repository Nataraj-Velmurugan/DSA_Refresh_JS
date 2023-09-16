// removeElement 

let nums = [5, 3, 2, 3, 1, 3, 2];

let target = 3;


let removeElements = (nums, target) => {
    let left=0, right = nums.length -1;

    while(left < right) {
        if(nums[left] == target) {
            nums.splice(left, 1);
            right++;
        } 
        else if(nums[right] == target) {
            nums.splice(right, 1); 
            left--;
        } else {
            left++;
            right--;
        }
    }

     return nums
}

console.log(removeElements(nums, target))
