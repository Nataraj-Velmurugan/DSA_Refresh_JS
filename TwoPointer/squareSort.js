// square sort

let nums = [-7, -5, 1, 4, 6];

for(let i=0; i<nums.length;i++) {
    nums[i] = nums[i]*nums[i]
}

let squareSort = (nums) => {
    let left=0, right=nums.length-1;
    let pushIndex = nums.length-1;
    let nums1 = [];

    while(left <= right) {
        if(nums[left] < nums[right]){
            nums1[pushIndex--] = nums[right--] 
        } else {
            nums1[pushIndex--] = nums[left++] 
        }
    }

    return nums1
}

console.log(squareSort(nums));
