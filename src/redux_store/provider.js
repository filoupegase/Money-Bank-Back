import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import reducer from './reducer';


const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default props => <Provider store={ store } { ...props } />;