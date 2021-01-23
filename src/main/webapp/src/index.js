import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
import "antd/dist/antd.css";

import Reducer from './reducer';
import Router from './router';


const store = createStore(Reducer);

function renderReactDom() {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Router />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};


renderReactDom();
store.subscribe(renderReactDom);
