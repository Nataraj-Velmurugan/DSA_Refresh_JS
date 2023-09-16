// merge sorted arrays


let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

let m=3, n=3;
let nums =[];


let mergeSortedArrays = (nums1, nums2) => {
    let left = 0, right=0;
    let index = 0;

    while(left < m || right < n) {
        if(left == m ) nums.push(nums2[right++])
        else if(right == n) nums.push(nums1[left++])
        else if (nums1[left] <= nums2[right]) nums.push(nums1[left++])
        else nums2.push(nums2[right++])
    }

    return nums;
}

console.log(mergeSortedArrays(nums1, nums2))

