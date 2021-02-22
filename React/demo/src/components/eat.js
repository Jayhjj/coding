import React, { Component ,Fragment} from 'react';
import '../style/eat.css'
import EatItem from './eatItem'
class Eat extends Component{
    constructor(props){
        super(props)
            this.state = {
                inputValue: 'hello',
                list:['宫保鸡丁','辣椒炒肉']
        }
    }
    inputChange(e){
        this.setState({
            inputValue: e.target.value
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
   render(){

       return(
        <Fragment>
            <div>
                
                <input  className='input' value={this.state.inputValue} onChange = {this.inputChange.bind(this)}></input>
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