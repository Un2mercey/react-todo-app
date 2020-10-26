import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './resources/reportWebVitals';
import { Core } from './app/core/Core';
import { store } from './app/redux/store';
import './app/style/index.scss';


const app: JSX.Element = (
    <Provider store={ store }>
        <Core />
    </Provider>
);

ReactDOM.render(app, document.getElementById('core'));

reportWebVitals();
