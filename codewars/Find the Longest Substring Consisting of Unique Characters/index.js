function longestSubstringOf(str) {
    str = str.split("")
    let newstr =[];    
    for (let i = 0; i < str.length; i++) {
        if(newstr.includes(str[i])){
            continue;
        }
        newstr.push(str[i])
    }
    console.log(newstr.length);
    console.log(newstr);
    
}



console.log(longestSubstringOf("hchzvfrkmlnozjk"))// 11, "chzvfrkmlno is the longest substring.")
//console.log(longestSubstringOf("baacab"))// 3, "cab is the longest substring.")
//console.log(longestSubstringOf("abcd"))// 4, "abcd is the longest substring.")
//console.log(longestSubstringOf("!@#$%^&^%$#@!"))// 7, "!@#$%^& is the longest substring.")


// function longestSubstringOf(str) {
//     let seen = new Set();
//     let left = 0;
//     let maxLength = 0;

//     for (let right = 0; right < str.length; right++) {
//         while (seen.has(str[right])) {
//             seen.delete(str[left]);
//             left++;
//         }

//         seen.add(str[right]);
//         maxLength = Math.max(maxLength, right - left + 1);
//     }

//     return maxLength;
// }
