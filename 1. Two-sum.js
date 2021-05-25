/**
 * Given an array of integers nums and an integer target, 
 * Return indices of the two numbers such that they add up to target
 *
 * @params {Array} nums
 * @params {Number} target
 * @return {Array}
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
