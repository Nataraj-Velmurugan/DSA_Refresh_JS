let set = [ 3, 34, 8, 12, 5, 2 ], sum = 9, n = set.length;

let subSetSum = (set, sum, n) => {

    if (sum == 0) return true
    if (n == 0) return false

    if (set[n - 1] > sum) return subSetSum(set, sum, n - 1)

    return subSetSum(set, sum, n - 1) || subSetSum(set, sum - set[n - 1], n - 1)

}

console.log(subSetSum(set, sum, n))
