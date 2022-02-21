/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const isNegative = x < 0 || false;
    const substring = isNegative ? `${x}`.substr(1) : `${x}`;
    const number = substring.split('').map(_ => Number(_)).reverse().join('');
    return (number < -1 * 2**31 || number > 2**31 - 1) ? 0 : isNegative ? -number : number;
};

/**
 * Example 1:
   Input: x = 123
   Output: 321

   Example 2:
   Input: x = -123
   Output: -321
 */
console.log('Ouput1: ' + reverse(123));
console.log('Ouput2: ' + reverse(-123));