// React / Redux / Router
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


// Components
import Product from './components/Product';
import Category from './components/Category';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import Header from './components/Header';

import './styles/index.scss';
import * as serviceWorker from './serviceWorker';

// History
import createHashHistory from 'history/createHashHistory';
export const history = createHashHistory();

// Create store and apply middleware
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <Router history={history}>
            <Header />
            <Switch>
                <Route exact path="/product/:id/:slug" component={Product} />
                <Route exact path="/category/:id/:slug" component={Category} />
                <Route exact path="/" component={Homepage} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
