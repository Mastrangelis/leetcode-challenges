
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 const findMedianSortedArrays = function(nums1, nums2) {
    const nums = nums1.concat(nums2).sort((a, b) => a - b);
    const numsLength = nums.length;
    if (numsLength % 2 === 0) {
        const medianIndex = numsLength / 2;
        return (nums[medianIndex] + nums[medianIndex - 1]) / 2;
    } else {
        return nums[Math.floor(numsLength / 2)];
    }
};

/**
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */

console.log('Output: ' + findMedianSortedArrays([1, 2], [3, 4]));