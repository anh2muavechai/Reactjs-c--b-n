// reducers/rootReducers.js
import { combineReducers } from 'redux';
import todosReducers from './todosReducer';

const rootReducer = combineReducers({
    todosReducers
});

export default rootReducer;