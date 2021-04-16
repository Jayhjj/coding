var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root] ,res = []
    while(queue.length){
        let row = queue.splice(0)
        let r = []
        for(let node of row){
            r.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        res.push(r)
    }
    return res
}