import React,{useState,useEffect} from 'react';
import '../static/css/ArticleList.css'
import { List ,Row ,Col , Modal ,message ,Button} from 'antd';
import axios from 'axios'
import  servicePath  from '../config/apiUrl'
const { confirm } = Modal;

function ArticleList(props){
    const [list,setList]=useState([])
    //拿到文章列表
    useEffect(()=>{
        getList()
    },[])
//得到文章列表
    const getList = ()=>{
    axios({
            method:'get',
            url: servicePath.getArticleList,
            withCredentials: true,
            header:{ 'Access-Control-Allow-Origin':'*' }
        }).then(
        res=>{
            setList(res.data.list)  
            // console.log(res.data.list.view_count)
            }
        )
    } 
    //删除文章方法
    const delArticle = (id) => {
        confirm({
            title:'确定要删除这篇博客文章吗?',
            content: '如果你点击OK按钮，文章将会永远被删除，无法恢复。',
            onOk(){
                axios(servicePath.delArticle+id,{withCredentials:true}).then(res => {
                    message.success('文章删除成功')
                    getList()
                })
            },
            onCancel(){
                message.success('没有任何改变')
            }
        })
    } 
    //修改文章
    const updateArticle = (id,checked) =>{
        props.history.push('/index/add/' + id)
    }    
    return (
        <div>
             <List
                header={
                    <Row className="list-div">
                        <Col span={8}>
                            <b>标题</b>
                        </Col>
                        <Col span={3}>
                            <b>类别</b>
                        </Col>
                        <Col span={3}>
                            <b>发布时间</b>
                        </Col>
                        <Col span={3}>
                            <b>浏览量</b>
                        </Col>

                        <Col span={4}>
                            <b>操作</b>
                        </Col>
                    </Row>

                }
                bordered
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <Row className="list-div">
                            <Col span={8}>
                                {item.title}
                            </Col>
                            <Col span={3}>
                             {item.typeName}
                            </Col>
                            <Col span={3}>
                                {item.addTime}
                            </Col>
                            <Col span={3}>
                              {item.view_count}
                            </Col>
                            <Col span={4}>
                              <Button type="primary" onClick = {() => {updateArticle(item.id)}} >修改</Button>&nbsp;
                              <Button onClick={() => {delArticle(item.id)}}>删除 </Button>
                            </Col>
                        </Row>

                    </List.Item>
                )}
                />

        </div>
    )
}

export default ArticleList