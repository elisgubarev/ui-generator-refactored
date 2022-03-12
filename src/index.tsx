import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {store} from './app/store';
import {Provider} from 'react-redux';

import "the-new-css-reset/css/reset.css"

import './scss/index.scss';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);