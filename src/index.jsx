import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './redux_store/provider';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';


const rootElement = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
        <PersistGate persistor={ persistor }>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
