import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../_actions/user_action'
import './NavBar.css'

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
        <div class="bar">
            {localStorage.getItem("token") === null ?
                <nav>
                    <ul class="bar">
                        <li><a href="/">Home</a></li>
                        <li><a href="/signup">SignUp</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/movie">MovieList</a></li>
                    </ul>
                </nav>
                :
                <nav>
                    <ul class="bar">
                        <li><a href="/">Home</a></li>
                        <li><a href="/mypage">MyPage</a></li>
                        <li><a href="#" onClick={onLogoutHandler}>Logout</a></li>
                        <li><a href="/movie">MovieList</a></li>
                    </ul>
                </nav>
            }
        </div>
    )
}

export default NavBar