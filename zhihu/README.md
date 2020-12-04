## 项目可以叙述的点

- 自定义dropdwon下拉组件，通过Dropdown 和 DropdownItem 组件完成下拉功能，并通过自定义hooks函数
  可以在点击该按钮以外的区域把隐藏菜单栏收起来
  # !dropdownRef.value.contains(e.target as HTMLElement) 去判断元素是否包含在页面上，从而控制点击事件完成后，下拉菜单是否收起

- 表单功能的封装
  使用一个vaildateInput的组件去做验证表单这件事，在页面显示那种错误信息