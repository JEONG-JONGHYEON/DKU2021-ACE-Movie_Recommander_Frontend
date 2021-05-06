import React from 'react'
import { PageHeader, Descriptions } from 'antd';

const renderContent = (column = 2) => (
    <Descriptions size="small" column={column}>
        <Descriptions.Item label="">2021-1학기 실무중심산학협력프로젝트</Descriptions.Item>
    </Descriptions>
);


const Content = ({ children, extra }) => (
    <div className="content">
        <div className="main">{children}</div>
        <div className="extra">{extra}</div>
    </div>
);

function Footer() {
    return (
        <PageHeader
            className="site-page-header-responsive"
            title="영화보러갈래v2"
            subTitle="커피한잔"
        >
            <Content>{renderContent()}</Content>
        </PageHeader>
    )
}

export default Footer