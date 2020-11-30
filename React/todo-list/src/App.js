import {createRef,useState} from 'react'
import './App.css';
import Test from './Test'
const todoDefault = [
  {
    text:'eat',
    done: false
  },
  {
    text:'sleep',
    done:true
  }
]
function App() {
  const [todos,setTodos] = useState(todoDefault)//[响应式数据，修改数据的方法]
  const arr = [1,2,3];
  const ref = createRef();
  const handleClick = () => {
    //ref.current DOM节点
    let val = ref.current.value;
    const newTodos = todos.concat({text:val,done:false});
    setTodos(newTodos);
    console.log(val);
  }
  const delItem = (i) => {
    let newTodos = todos.slice(0);
    newTodos.splice(i,1);
    setTodos(newTodos); //显示调用一下 更改数据的 api，因为没有监听数据的的get set
  }
  return (
    <div className="App">
      <Test name = "jay" onMessage ={(msg) => {console.log(msg)}}/>
      <input type = "text" ref = {ref}></input>
      <button onClick = {handleClick} ref = {(el) => {console.log(el)}}> 添加代办事件</button>
      
      {
       todos.map((todoItem,i) => {
          return <li key={i} onClick = {() => { delItem(i) }}>
            {todoItem.text}
          </li>
        })
      }
      {arr}
      
    </div>
  );
}

export default App;
