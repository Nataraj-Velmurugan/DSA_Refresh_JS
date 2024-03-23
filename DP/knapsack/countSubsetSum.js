// count-number-of-subsets-with-given-sum

let arr = [1, 2, 3, 3], n=4, sum=6

let dp = (arr, n, i, sum) => {
    if(i== n) {
        if(sum == 0) return 1
        return 0
    }

    return  dp(arr, n, i+1, sum - arr[i]) + dp(arr, n, i+1, sum)
}

console.log(dp(arr, n, 0, sum))
