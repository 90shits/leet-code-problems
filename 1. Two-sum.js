/**
 * Given an array of integers nums and an integer target, 
 * Return indices of the two numbers such that they add up to target
 *
 * Examples:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Output: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * @params {Array} nums
 * @params {Number} target
 * @return {Array} indices of the two numbers
 */
const twoSum = (nums, target) => {
    let dataSet = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (dataSet.has(target - nums[i])) {
            return [dataSet.get(target - nums[i]), i];
        } else {
            dataSet.set(nums[i], i)
        }
    }
    return []
}
