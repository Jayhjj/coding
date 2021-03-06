import {Divider, Avatar,Icon} from 'antd'
// import { GithubOutlined ,QqOutlined,WechatOutlined} from '@ant-design/icons';
import '../static/style/components/author.css'
// import {Route} from 'react'
const Author = () => {
    
    return(
        <div className="author-div comm-box">
             <div><Avatar size={100} src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2550039893,2946925800&fm=11&gp=0.jpg"/></div>
             <div className="author-introduction" id ="github" >
                 一个初入前端的大四毕业生,对前端技术有较大兴趣，希望能学习更多的前端知识，提升自己的编码能力
                 <Divider>社交账号</Divider>
                 <Avatar size={35} icon={<Icon type="github" />} className="account" 
                         onClick={()=>{window.location.href="https://github.com/Jayhjj"}}>      
                </Avatar>
                 <Avatar size={35} icon={<Icon type="qq" />} className="account"></Avatar>
                 <Avatar size={35} icon={<Icon type="wechat" />} className="account"></Avatar>
             </div>
        </div>
    )
  
}
export default Author
