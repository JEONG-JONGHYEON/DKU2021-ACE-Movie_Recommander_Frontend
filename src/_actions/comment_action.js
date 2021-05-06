import axios from 'axios'
import {
    FETCH_ANONY_COMMENTS
} from './types'
import { API_URL } from '../components/Config'


// 익명댓글 리스트 가져오는 액션
export function fetchAnonyComments(movieId, page = 1) {
    const request = axios.get(API_URL + '/comments/' + movieId + '/?page=' + page)
        .then(response => response.data)

    return {
        type: FETCH_ANONY_COMMENTS,
        payload: request
    }
}
