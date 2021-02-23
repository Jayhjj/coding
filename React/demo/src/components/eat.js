import React, { Component ,Fragment} from 'react';
import '../style/eat.css'
import EatItem from './eatItem'
import axios from 'axios'
class Eat extends Component{
    constructor(props){
        super(props)
            this.state = {
                inputValue: 'hello',
                list:['宫保鸡丁']
        }
    }
    inputChange(e){
        this.setState({
            inputValue: this.input.value
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })
    }
    deleteItem(index){
        console.log(index)
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list: list
        })
    }

    componentDidMount(){
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then((res) => {
                console.log(res)
            })
    }
   render(){

       return(
        <Fragment>
            <div>
                
                <input id="addGoods" 
                    className='input' 
                    value={this.state.inputValue} 
                    onChange = {this.inputChange.bind(this)}
                    ref={(input) => {this.input = input}}
                    >
                </input>
                <button onClick={this.addList.bind(this)}>下单</button>
            </div>
            <ul>
                {
                    this.state.list.map((item,index) => {
                    // return <li key={index+item} onClick={this.deleteItem.bind(this,index)}>{item}</li>
                    return (
                        <div key = {item+index}>
                             <EatItem content={item} index = {index} deleteItem={this.deleteItem.bind(this)} key={index+item} list = {this.state.list} />
                        </div>
                    )
                    })
                } 
            </ul>
        </Fragment>
       )
   }
}

export default Eat