// 여러가지 Reducer (user, post, comment, ... 등)를 합친다.
import { combineReducers } from 'redux';
import user from './user_reducer';
import movie from './movie_reducer';

const rootReducer = combineReducers({
    user,
    movie
})

export default rootReducer;