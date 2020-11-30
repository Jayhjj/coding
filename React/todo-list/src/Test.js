import { Fragment, useEffect } from "react";

function Test(props){
    console.log(props)
    const node = (
        <h2>title</h2>
    )
   
    useEffect(() => {
        setTimeout(() => {
            props.onMessage('子组件传递传给父组件');
            console.log(333);
        },3000);
    },[])
    return (
        <Fragment>
            测试数据
            {node}
        </Fragment>
    )
}

export default Test