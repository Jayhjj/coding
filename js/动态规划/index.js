//背包模型
//有n件物品，物品体积用一个名为w的数组存起来，物品价值用value数组存起来
//每件物品体积w[i]表示,加载value[i],现在又一个容量为c 的背包
//如何选取物品放入背包,使得价值最大

//要取的第i件商品不在背包中
f(i,c) = f(i-1,c)
//要取的第i件商品在背包中
f(i,c) = f(i-1,c-w[i]) + value[i]


function knapsack(n, c, w, value) {
    // 规划一个数组来动态的保存状态
    const dp = (new Array(c + 1)).fill(0) // [0, 0, 0, 0, 0, 0, 3]  [0, 0, 0, 0, 0, 0, 5]
    // res 用来记录所有的组合方案中的最大值
    let res = -Infinity
    for (let i = 0; i < n; i++) {
      for (let v = c; v >= w[i]; v--) {
        dp[v] = Math.max(dp[v], dp[v- w[i]] + value[i])
  
        if (dp[v] > res) {
          res = dp[v]  // 3
        }
      }
    }
    return res
  }

