// import React, { Component } from 'react';
import { Input , Button , List } from 'antd'
//无状态组件
const TodoListUI = (props) => {
    return(
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button type="primary" onClick={props.clickBtn}>增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (<List.Item onClick={(index) => {props.deleteList(index)}}>{item} </List.Item>)}
                />
            </div>
        </div>
    )
}

//普通组件
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{ margin: '10px' }}>
//                 <div>
//                     <Input
//                         placeholder={this.props.inputValue}
//                         style={{ width: '250px', marginRight: '10px' }}
//                         onChange={this.props.changeInputValue}
//                         value={this.state.inputValue}
//                     />
//                     <Button type="primary" onClick={this.props.clickBtn}>增加</Button>
//                 </div>
//                 <div style={{ margin: '10px', width: '300px' }}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.deleteList(index)}}>{item} </List.Item>)}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

export default TodoListUI