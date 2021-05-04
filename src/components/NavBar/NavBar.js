import React from 'react'
import { useDispatch } from 'react-redux'
import 'antd/dist/antd.css'
import { Layout, Menu } from 'antd'
import { logoutUser } from '../../_actions/user_action'

const { Header } = Layout

function NavBar() {
    const dispatch = useDispatch();

    const onLogoutHandler = (e) => {
        dispatch(logoutUser())
            .then(response => {
                console.log(response)
            })
    }

    // 중복되는 Home Movies 아이템은 어떻게 해결할까..
    return (
        <Header style={{ zIndex: 1, width: '100%' }} >
            <div className="logo">영화보러갈래v2</div>
            {localStorage.getItem("token") === null ?
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
                    <Menu.Item key="2"><a href="/movie">Movies</a></Menu.Item>
                    <Menu.Item key="3"><a href="/login">Login</a></Menu.Item>
                    <Menu.Item key="4"><a href="/register">Register</a></Menu.Item>
                </Menu>
                :
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
                    <Menu.Item key="2"><a href="/movie">Movies</a></Menu.Item>
                    <Menu.Item key="3" onClick={onLogoutHandler}>Logout</Menu.Item>
                    <Menu.Item key="4"><a href="/mypage">MyPage</a></Menu.Item>
                </Menu>
            }
        </Header >
    )
}

export default NavBar