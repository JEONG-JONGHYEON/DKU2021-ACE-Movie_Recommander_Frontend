import {
    FETCH_MOVIES, FILTER_MOVIES
} from '../_actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, fetchSuccess: action.payload }
            break;

        case FILTER_MOVIES:
            return { ...state, fetchSuccess: action.payload }
            break;

        default:
            return state;
    }
}