https://leetcode.com/problems/duplicate-zeros/description/

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]

let arr = [1,2,3];

var duplicateZeros = function(arr) {

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 0) {
            arr.splice(i+1, 0, 0)
            arr.pop()
            i++
        }
    }

    return arr
    
};

console.log(duplicateZeros(arr))
