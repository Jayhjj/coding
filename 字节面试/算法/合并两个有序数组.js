var merge = function(nums1, m, nums2, n){
    let left = 0 ;
    let right = 0;
    let tes_nums1 = nums1.slice(0,m);
    let tes_nums2 = nums2.slice(0,n);
    let result = [];
    while(left < m && right < n){
        if(tes_nums1[left] < tes_nums2[right]){
            result.push(tes_nums1[left])
            left++
        }else{
            result.push(tes_nums2[right])
            right++
        }
    }
    result = result.concat(tes_nums1.slice(left)).concat(tes_nums2.slice(right))
    for(let i = 0;i < result.length;i++){
        nums1[i] = result[i];
    }
    return nums1
    
}