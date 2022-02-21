/**
 * @param {string} s
 * @return {number}
 */
 const romanToInt = function(s) {
    const map = initMap();
    
    if (s.length < 1) return 0;
    let sum = map.get(s[s.length-1]);
    for (let i = s.length-2; i >= 0; i--) {
        const t1 = map.get(s[i]);
        const t0 = map.get(s[i + 1]);
        if (t1 < t0) {
            sum -= t1
        } else {
            sum += t1
        }
    }
    return sum;
};

const initMap = () => {
    const map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    return map;
}

/**
 * Example 1:
   Input: s = "III"
   Output: 3
   Explanation: III = 3.

   Example 2:
   Input: s = "LVIII"
   Output: 58
   Explanation: L = 50, V= 5, III = 3.
  
   Example 3:
   Input: s = "MCMXCIV"
   Output: 1994
   Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */
console.log('Output1: ' + romanToInt('III'));
console.log('Output2: ' + romanToInt('LVIII'));
console.log('Output3: ' + romanToInt('MCMXCIV'));