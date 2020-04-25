// React / Redux / Router
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


// Components
import ProductListings from './components/ProductListings';
import CategoryListings from './components/CategoryListings';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import Header from './components/Header';

import './styles/index.scss';
import * as serviceWorker from './serviceWorker';

// History
import createBrowserHistory from 'history/createBrowserHistory';
export const history = createBrowserHistory();

// Create store and apply middleware
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStoreWithMiddleware(rootReducer)}>
            <Router history={history}>
                <Header />
                <Switch>
                    <Route exact path="/product/:id" component={ProductListings} />
                    <Route exact path="/category/:id" component={CategoryListings} />
                    <Route exact path="/" component={Homepage} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
