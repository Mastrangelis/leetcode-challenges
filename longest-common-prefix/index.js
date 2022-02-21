/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = function(strs) {
    let prefix = '';
    
    for (let i = 0; i <= strs[0].length; i++) {
        const nextPrefix = strs[0].slice(0, i);
        
        if (strs.every(str => str.slice(0, i) === nextPrefix)) {
            prefix = nextPrefix;
        } else {
            break;
        }
    }
    
    return prefix;
};

/**
  Example 1:
  Input: strs = ["flower","flow","flight"]
  Output: "fl"

  Example 2:
  Input: strs = ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.
 */

console.log('Output1: ' + longestCommonPrefix(["flower","flow","flight"]));
console.log('Output1: ' + longestCommonPrefix(["dog","racecar","car"]));