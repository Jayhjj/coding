//给定一个无序的整数数组,找到其中最长的上升子序列的长度
//[10,9,2,5,3,101,18]

const lengthOfLIS = function(nums){
    const len = nums.length
    if(!len){
        return 0
    }
    //初始化数组里面的每一个索引的状态值
    const dp = (new Array(len)).fill(1)
    //初始化最大上升子序列的长度为1
    let maxLen = 1
    //从第二个元素开始,遍历整个数组
    for(let i = 1;i<len;i++){
        //每遍历一个新元素，都要回头看，看看能不能延长原有的上升子序列
        for(let j = 0 ; j < i ; j++){
            if(nums[i] > nums[j]){
            dp[i] = Math.max(dp[i],dp[i] + 1)
            }
        }
        if(dp[i] > maxlen){
            maxLen = dp[i]
        }
    }
    return maxLen
}