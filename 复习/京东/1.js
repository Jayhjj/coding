// 拉齐有一个01序列，他可以对这个序列进行任意多次变换，
// 每次变换都是把序列的最后若干个元素放到最前面，例如：010011，
// 将最后3个元素011放到最前面，序列变为011010。所有变换结束后，
// 拉齐需要挑出一个全为1的连续区间，要求最大化区间长度。
// 010011 010011

// 如果1左边和右边都有0的时候，这个1无论怎么变化都不可能加入到连续的1中,
// 11011  1101110  
function maxLength(sequence){
    let arr = sequence.split('')
    // console.log(arr)
    let value = 0;
    let max = 0;
    if(arr.indexOf('0') !== -1){
        let arr2 = sequence + sequence
        // console.log(arr2)
        for(let i = 0 ; i < arr2.length ;i++){
            if(arr2[i] !== '0' ){
                value++
                // console.log(value)
                if(max < value){
                    max = value
                }
            }else{
                value = 0
            }
        }
        // console.log(max)
        return max
        
    }else{
        // console.log(123)
        return arr.length
    }
}
console.log(maxLength('010011')) 