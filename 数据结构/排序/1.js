// 冒泡

const maopao = (nums) => {
    for(let i = 0 ; i< nums.length;i++){
        for(let j = 1;j<nums.length-i;j++){
            let res;
            if(nums[i] > nums[j]){
                res = nums[i];
                nums[i] = nums[j]
                nums[j] = res
            }
        }
    }
    return nums
}