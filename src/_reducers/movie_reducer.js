import {
    FETCH_MOVIES, FETCH_MOVIEDETAIL
} from '../_actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, fetchSuccess: action.payload }
            break;

        case FETCH_MOVIEDETAIL:
            return { ...state, fetchSuccess: action.payload }
            break;

        default:
            return state;
    }
}