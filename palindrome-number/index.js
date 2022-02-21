/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    return x === +x.toString().split("").reverse().join("");
};

/**
 * Example 1:
   Input: x = 121
   Output: true
   Explanation: 121 reads as 121 from left to right and from right to left.
   
   Example 2:
   Input: x = -121
   Output: false
   Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
   
   Example 3:
   Input: x = 10
   Output: false
   Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */
console.log('Output1: ' + isPalindrome(121));
console.log('Output2: ' + isPalindrome(-121));
console.log('Output3: ' + isPalindrome(10))