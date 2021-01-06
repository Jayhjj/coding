//字符串反转
// const str = 'maosen'
//nesoam

// const res = str.split('').reverse().join('')


// 给定一个非空字符串s,最多删除一个字符串，判断能否成为回文字符串

// function huiwen(str) {
//     let i = 0, j = str.length - 1;
//     while (i < j) {
//         if (str[i] === str[j]) {
//             i++;
//             j--;
//         } else {
//             for (let k = 0; k < str.length; k++) {
//                 let str1 = str.slice(k);
//                 huiwen(str1);
//             }
//             return false
//         }
//     }
//     return true
// }

// var isPalindrome = function (str) {


//     if ((str.split('').reverse().join('')) === str) {
//         return true;
//     } else {
        
//         for (let i = 0; i < str.length; i++) {
//   
//             let j = str.length-1
//             if(str[i] === str[j]){
//                 i++;
//                 j--;
//             }

//             let str1 =  str.split('')
//             huiwen(str1);
//         }
//     }
//     return false
// };

var isPalindrome = function(str) {
   
    if((str.split('').reverse().join(''))===str){
        return true;
    }else{
        return false
    }
};

var huiwen = function(str){
    let flag = isPalindrome(str);
    if(!flag){
        let i = 0 , len = str.length
        while(i<len && !flag){
           
                let arrStr = str.split('')
                arrStr.splice(i,1);
                i++;
                let newStr = arrStr.join('')
                console.log(newStr);
                flag = isPalindrome(newStr)
            
        }
    }
    return flag
}