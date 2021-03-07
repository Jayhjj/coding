//笔记本记载的东西(数据)
//天生就可以拿到仓库数据
const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
}//仓库数据源，默认为空

export default (state = defaultState,action)=>{
    console.log(state,action)
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    //关键代码------------------start----------
    //state值只能传递，不能使用
    if(action.type === 'addItem' ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
     //关键代码------------------end----------
    if(action.type === 'deleteItem'){
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index,1)
        return newState 
    }
    return state
}