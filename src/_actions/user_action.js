import axios from 'axios'
import {
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER
} from './types'
import { API_URL } from '../components/Config'


// 로그인 액션
export function loginUser(dataToSubmit) {
    const request = axios.post(API_URL + '/login', dataToSubmit)
        .then(response => response.data)
    return {
        type: LOGIN_USER,
        payload: request
    }
}


// 로그아웃 액션
export function logoutUser() {
    const request = axios.post(API_URL + '/logout', {}, { headers: { 'Authorization': `Token ${localStorage.getItem("token")}` } })
        .then(response => response.data)
        .then(
            localStorage.removeItem("token"),
            window.location.reload()
        )

    return {
        type: LOGOUT_USER,
        payload: request
    }
}


// 회원가입 액션
export function registerUser(dataToSubmit) {
    const request = axios.post(API_URL + '/join', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

