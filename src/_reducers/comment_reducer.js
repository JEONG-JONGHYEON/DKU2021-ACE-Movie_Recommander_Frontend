import {
    FETCH_ANONY_COMMENTS
} from '../_actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_ANONY_COMMENTS:
            return { ...state, fetchSuccess: action.payload }
            break;

        default:
            return state;
    }
}