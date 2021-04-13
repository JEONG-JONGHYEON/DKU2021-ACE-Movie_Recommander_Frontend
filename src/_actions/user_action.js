import axios from 'axios'
import {
    LOGIN_USER,
    REGISTER_USER
} from './types'

const API_URI = 'https://api.movie.live2skull.kr'

export function loginUser(dataToSubmit) {
    const request = axios.post(API_URI + '/data/users/login', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {
    const request = axios.post(API_URI + '/data/users/join', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}