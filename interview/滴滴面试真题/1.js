// const maxValue = (n,arguments) => {
//     let sum = arguments[0];
//     for(let i = 1 ;i<n;i++){
//         if(arguments[i-1] > 0){
//             arguments[i] += arguments[i-1]
//         }
//         sum = Math.max(sum,arguments[i])
//     }
//     return sum
// }

// // [-1,2,3,4,2,5]

// console.log( maxValue(3,[-1,1,3]))



// var helper = function(list, m, n) {
//     let sum = 0;
//     let lmax = -Infinity;
//     let rmax = -Infinity;
//     const mid = ((n - m) >> 1) + m;
//     const l = helper(list, m, mid)
//     const r = helper(list, mid + 1, n)
  
//     // 如果最大值出现在左数组
//     for (let i = mid; i >= m; i--) {
//       sum += list[i] 
//       if (sum > lmax) {
//         lmax = sum
//       }
//     }
  
//     sum = 0;
  
//     // 如果最大值出现在右数组
//     for (let i = mid + 1; i <= n; i++) {
//       sum += list[i] 
//       if (sum > rmax) {
//         rmax = sum
//       }
//     }
  
//     return Math.max(l, r, lmax + rmax)
//   }
  
//   var maxSubArray2 = function(nums) {
//     return helper(nums, 0, nums.length - 1)
//   };
const zero = (n) => {
    let sum = 1
    // let res = 0
    for(let i = 1 ; i <= n ; i++){
          sum = sum * i
    }
    console.log(sum)
    let arr = sum.toString().split("").map(Number)
    // console.log(arr)
    // console.log(arr[arr.length-1])
    var count = 0
    if(arr[arr.length-1] === 0){
        count = 1
    }
    for(let i = arr.length-1 ; i >= 0 ; i--){
            if(arr[arr.length-1] === 0 ){
                if(arr[i] ===0 && arr[i-1] === 0){
                    count++
                }
                if(arr[i-1] !==0 ){
                    return count
                }
            }
        // console.log(count)
    }
    
    if(count === 0){
        return 0
    }
}

console.log(zero(1))


