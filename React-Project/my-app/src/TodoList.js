import React, { Component } from 'react';
import 'antd/dist/antd.css'
// import { Input , Button , List } from 'antd'
import store from './store'
import TodoListUI from './TodoListUI'
// import {CHANGEINPUT,ADDITEM,DELETEITEM} from './store/actionTypes'
import { getInputChangeAction,clickButton,getDeleteItem,initListAction} from './store/actionCreators'
import axios from 'axios'
class TodoList extends Component {
    constructor(props){
        super(props)
        // console.log(store.getState())s
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.deleteList = this.deleteList.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return ( 
            <TodoListUI 
                list = {this.state.list}
                inputValue = {this.state.inputValue}
                changeInputValue = {this.changeInputValue}
                clickBtn = {this.clickBtn}
                deleteList = {this.deleteList}
            >
            </TodoListUI>
         );
    }
    componentDidMount(){
        axios.get('http://localhost:3001/list').then((res) => {
            console.log(res);
            const data = res.data
            const action = initListAction(data)
            console.log(action)
        })  
    }
    changeInputValue(e){
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        // const action = { type:ADDITEM}
        const action = clickButton()
        store.dispatch(action)
    }
    deleteList(index){
        // const action = {
        //     type:DELETEITEM,
        //     index
        // }
        const action = getDeleteItem(index)
        store.dispatch(action)
    }
}
export default TodoList;