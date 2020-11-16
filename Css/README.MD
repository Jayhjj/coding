置换元素
```html
    <img src ="">
     <iframe src ="">
    <canvas/>
    <video src="">
```

不受css视觉模型控制,(css渲染规则则不考虑内部内容)

非置换元素
```html
    <div>
        <div>
        </div>
    </div>
```

css布局方案
float
position
normal flow

- inline-level-box  ifc (base-line)
- block-level-box   bfc (清楚浮动，两栏布局)

flex
grid