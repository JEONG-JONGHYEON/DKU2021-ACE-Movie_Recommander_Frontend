import axios from 'axios'
import {
    FETCH_MOVIES, FILTER_MOVIES
} from './types'
import { API_URL } from '../components/Config'


// 영화 리스트 가져오는 액션
export function fetchMovies(page = 1, title, genre, score_gte) {
    // const request = axios.get(API_URL + '/movies/?page=' + page)
    const request = axios.get(API_URL + '/movies/?page=' + page + '&title=' + title + '&genre=' + genre + '&score_gte=' + score_gte)
        .then(response => response.data)

    return {
        type: FETCH_MOVIES,
        payload: request
    }
}

// 영화 필터링 액션
// export function filterMoives(page = 1, title, genre, score_gte) {
//     const request = axios.get(API_URL + '/movies/?page=' + page + '&title=' + title + '&genre=' + genre + '&score_gte=' + score_gte)
//         .then(response => response.data)

//     return {
//         type: FILTER_MOVIES,
//         payload: request
//     }
// }