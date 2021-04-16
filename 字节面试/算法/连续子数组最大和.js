var maxSubArray = function(nums) {
    let pre = cur = sum = nums[0]; //cur和sum没用let声明，都无所谓的
    // let cur = nums[0];
    // let sum = nums[0]
    for(let i = 1; i < nums.length; i++) {
        cur = pre >= 0? pre + nums[i] : nums[i];
        pre = cur;
        sum = sum > pre? sum:pre
    }
    return sum
};

[1, -2, 3, 5, -2, 6, -1]