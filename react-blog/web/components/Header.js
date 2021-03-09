import React from 'react'
import '../static/style/components/header.css'
import {Row,Col,Menu} from 'antd'
import {HomeOutlined ,VideoCameraOutlined,SmileOutlined  } from '@ant-design/icons';
const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className="header-logo">jay</span>
                <span className="header-txt">前端学习</span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                <Menu.Item key="home">
                    <HomeOutlined />
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                    <VideoCameraOutlined />
                    视频
                </Menu.Item>
                <Menu.Item key="life">
                    <SmileOutlined />
                    生活
                </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header