import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './store';






import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const enhancers = [];
const middleware = [thunkMiddleware];
    
    if (typeof window !== 'undefined') {
        const devToolsExtension = window.devToolsExtension;

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
        }
    }

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, compose(applyMiddleware(...middleware), ...enhancers));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
