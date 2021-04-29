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
                    본 사이트는 영화 정보 / 영화 추천을 제공하는 사이트입니다.<br />
                    사이트 이용 방법<br />
                    ~~~
                </Content>
                <Footer style={{ textAlign: 'center' }}>2021-1학기 실무중심산학협력프로젝트 커피한잔</Footer>
            </Layout>
        </div>
    )
}

export default withRouter(LandingPage)