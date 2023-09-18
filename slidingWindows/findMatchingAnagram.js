
import _ from "lodash";

let str = "bcdacbbaecabd";

let p = str.split("");

let match = "abc";

let m = match.length;

let sMap = {}, pMap= {};

for(let i=0; i<match.length; i++) {
    if(sMap[match[i]]) sMap[match[i]] += 1
    else sMap[match[i]] = 1

    if(pMap[p[i]]) pMap[p[i]] += 1
    else pMap[p[i]] = 1
}

let findMatchingString = () => {

    for(let i=m; i<p.length; i++) {
        if(_.isEqual(sMap,pMap)) {
            console.log("match found");
        }
    
        if(pMap[p[i-m]]) delete pMap[p[i-m]]
        if(pMap[p[i]]) pMap[p[i]] += 1
        else pMap[p[i]] = 1
    
    }

}

findMatchingString();
