import React from 'react'
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import './LandingPage.css';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

function LandingPage(props) {
    return (
        <div>
            <Layout className="layout">
                <Content style={{ padding: '50px' }}>
                    <div className="site-layout-content">다시 디자인중.. ㅎㅎ</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>2021-1학기 실무중심산학협력프로젝트 커피한잔</Footer>
            </Layout>
        </div>
    )
}

export default withRouter(LandingPage)