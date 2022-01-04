import React from 'react';
// redux
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// reducer
import reducer from './reducer';


const persistConfig = {
  key: 'root',
  storage
};

const persistsReduceConfig = persistReducer(persistConfig, reducer);
const store = createStore(persistsReduceConfig, applyMiddleware(thunk));
const persistor = persistStore(store);
export default store;
export { persistor };


