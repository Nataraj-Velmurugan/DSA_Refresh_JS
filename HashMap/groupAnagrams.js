// https://leetcode.com/problems/group-anagrams/description/

let strs = ["eat","tea","tan","ate","nat","bat"]

var groupAnagrams = function(strs) {

    let resultMap = {};

    for(let i=0; i<strs.length; i++) {
        
        let tempString = strs[i];
        let sortString = tempString.split('').sort().join('');
        
        let tempArray = []
        if(resultMap.hasOwnProperty(sortString) === true) resultMap[sortString].push(strs[i])  
        else {
            tempArray.push(strs[i])
            Object.assign(resultMap, {[sortString]: tempArray});
        } 
        
    }

    return Object.values(resultMap)
    
};

console.log(groupAnagrams(strs))

