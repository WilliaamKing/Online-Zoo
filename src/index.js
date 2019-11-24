import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import Store from './store/store';
import * as serviceWorker from './serviceWorker';

const Root = (
    <Provider store = {Store}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
