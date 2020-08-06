// reducers/todosReducers.js
import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO, MARK_ALL, CLEAR_MARKED } from '../constants/ActionTypes';

const initialState = [
	{
	    text: 'Use Redux',
	    marked: false,
	    id: 1
	},
	{
	    text: 'Todo completed',
	    marked: true,
	    id: 2
	}
];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [{
                id: (state.length === 0) ? 1 : state.length + 1,
                marked: false,
                text: action.text
            }, ...state];

        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);

        case EDIT_TODO:
            return state.map((todo) => todo.id === action.id ? { ...todo, text: action.text } : todo);
        case MARK_TODO:
            return state.map((todo) => todo.id === action.id ? { ...todo, marked: !todo.marked } : todo);

        default:
            return state;
    }
}