import _ from "lodash";

let str1 = "abcabdcbb";

let str = "pwwkew";

let p = str.split("");

let pMap = {};

for (let i = 0; i < p.length; i++) {
    if (!pMap[p[i]]) pMap[p[i]] = 1
    else break;
}

let findLongestSubString = () => {
    let sMap = {};
    for (let i = 0; i < p.length; i++) {
        for (let j = i; j < p.length; j++) {
            if (!sMap[p[j]]) sMap[p[j]] = 1
            else break;
        }
        console.log(Object.entries(sMap).length);
        if (Object.entries(sMap).length > Object.entries(pMap).length) pMap = sMap;
        sMap = {};
    }

    return pMap
}

let set = new Set();



let findLongestSubStringOptimized = () => {
    let left = 0, right = 0, max = 0;

    while (right < p.length) {
        if (set.has(p[right]) == false) {
            set.add(p[right++])
            max = Math.max(max, set.size)
        } else {
            right = ++left;
            set.clear();
        }

    }

    return set
}

console.log(findLongestSubStringOptimized());
