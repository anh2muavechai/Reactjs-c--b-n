import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import TodoApp from './containers/TodoApp';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

// initialState
const initialState = {}

// Create store
const store = createStore(
	rootReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const appRoot = (
    <Provider store={store}>
        <div>
            <TodoApp />
        </div>
    </Provider>
)

ReactDOM.render(appRoot, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
