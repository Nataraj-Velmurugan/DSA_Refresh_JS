let nums1 = [8,4,2,3,11,15,2,1];
let k1 = 2;


let maxSum = (nums, k) => {
    let left = 0, right=k, sum = 0;
    let maxSum = 0;
    for(let i=0; i<k;i++) {
        maxSum += nums[i]
    }
    while(right < nums.length){
        maxSum = maxSum + nums[right++] - nums[left++];
        if(sum < maxSum) {
            sum = maxSum
        }
    }

    console.log(sum)
}

maxSum(nums1,k1)
