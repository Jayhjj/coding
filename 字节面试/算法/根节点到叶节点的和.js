const dfs = (root,preSum) => {
    if(root == null) {
        return 0
    }
    const sum = preSum*10 + this.val;
    if(root.left == null && root.right == null){
        return sum
    }else{
        return dfs(root.left,sum) + dfs(root.right,sum)
    }
}

var sumNumbers = function(root) {
    return dfs(root,0)
 };