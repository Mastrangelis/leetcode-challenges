/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        const remainer = target - nums[i];
        if (map.has(remainer) && map.get(remainer) !== i) {
            return [i, map.get(remainer)];
        }
    }
    return null;
};

/**
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
console.log('Output: ' + twoSum([2, 7, 11, 15], 9))

