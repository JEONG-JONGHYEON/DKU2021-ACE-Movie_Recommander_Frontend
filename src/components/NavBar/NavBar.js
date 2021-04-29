import React from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function NavBar() {
    return (
        <Header style={{ zIndex: 1, width: '100%' }} >
            <div className="logo">영화보러갈래v2</div>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
                <Menu.Item key="2"><a href="/movie">Movies</a></Menu.Item>
                <Menu.Item key="3"><a href="/login">Login</a></Menu.Item>
                <Menu.Item key="4"><a href="/register">Register</a></Menu.Item>
            </Menu>
        </Header >
    )
}

export default NavBar