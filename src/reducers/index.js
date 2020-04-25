import { combineReducers } from 'redux';
import categories from './reducer_categories';
import products from './reducer_products';

const rootReducer = combineReducers({
    categories,
    products
});

export default rootReducer;
