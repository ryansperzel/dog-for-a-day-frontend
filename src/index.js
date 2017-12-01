import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { dogsReducer } from './reducers/dogs'
import { sheltersReducer } from './reducers/shelters'
import { usersReducer } from './reducers/users'

const rootReducer = combineReducers({
  dogs: dogsReducer,
  shelters: sheltersReducer,
  users: usersReducer
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
