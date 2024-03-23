// Partition a set into two subsets such that the difference of subset sums is minimum

// Input:  arr[] = {1, 6, 11, 5} 
// Output: 1
// Explanation:
// Subset1 = {1, 5, 6}, sum of Subset1 = 12 
// Subset2 = {11}, sum of Subset2 = 11 

let arr = [3, 1, 4, 2, 2, 1];
let n = arr.length;

// op = 1

function findMinRec(arr, i, sumCalculated, sumTotal) {

    // If we have reached last element.
    // Sum of one subset is sumCalculated,
    // sum of other subset is sumTotal- sumCalculated.  
    // Return absolute difference of two sums.
    if (i == 0)
        return Math.abs((sumTotal - sumCalculated) - sumCalculated);


    // For every item arr[i], we have two choices
    // (1) We do not include it first set
    // (2) We include it in first set
    // We return minimum of two choices
    return Math.min(findMinRec(arr, i - 1, sumCalculated + arr[i - 1], sumTotal),
                    findMinRec(arr, i - 1, sumCalculated, sumTotal));
}

// Returns minimum possible difference between
// sums of two subsets
function findMin(arr, n) {

    let sumTotal = 0;
    for (let i = 0; i < n; i++)
        sumTotal += arr[i];

    // Compute result using recursive function
    return findMinRec(arr, n, 0, sumTotal);
}


findMin(arr, n)


