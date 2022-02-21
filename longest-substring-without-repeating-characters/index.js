/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = function(s) {
    
    if (s.length === 0) {
        return 0;
    }
    
    if (s.length === 1) {
        return 1;
    }
    
    let hashmap = new Map(), max = 0;
    for (let i = 0; i < s.length; i++) {
        let chars = [s[i]];
        for (let j = i+1; j < s.length; j++) {
            if (!chars.includes(s[j])) {
                chars.push(s[j])
            } else {
                hashmap.set(chars.join(""), chars.length);
                break;
            }
        }
        hashmap.set(chars.join(""), chars.length);
    }
    return Math.max(...hashmap.values())
};

/**
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
console.log('Output: ' + lengthOfLongestSubstring("pwwkew"))