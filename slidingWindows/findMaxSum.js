// sliding window

let nums = [1, 5, 2, 3, 7, 1]

let sum  = 0; target = 3

for(let i=0; i<target; i++) {
    sum += nums[i]
}

let right = target

let findMaxTargetSubArray = (nums) => {
    for(let i=0; i<nums.length-target; i++) {
        let temp = 0;
        temp = sum + nums[i+right] - nums[i]
        if(temp > sum) sum = temp    
    }

    return sum
}

console.log(findMaxTargetSubArray(nums))



