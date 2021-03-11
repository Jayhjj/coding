
# link标签和import标签的区别
link 标签是html标签,@import是css提供的
link会在页面加载的时候同时加载,@import引入的css会在页面加载完成后再加载
link没有兼容性，@import必须IE5以上
link的权重高于@import

# transition 和 animation 的区别
transition需要触发一个条件,animation不需要
transition是2帧运行的,from...to,animation 是一帧一帧运行的

# flex布局
传统布局 = 依赖display + position + float , 这种再特殊布局中非常不方便,不如垂直居中