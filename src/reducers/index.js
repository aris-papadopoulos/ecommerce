import { combineReducers } from 'redux';
import categories from './reducer_categories';
import products from './reducer_products';
import single_product from './reducer_single_product';

const rootReducer = combineReducers({
    categories,
    products,
    single_product
});

export default rootReducer;
