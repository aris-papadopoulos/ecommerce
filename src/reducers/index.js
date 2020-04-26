import { combineReducers } from 'redux';
import categories from './reducer_categories';
import products from './reducer_products';
import single_category from './reducer_single_category';
import single_product from './reducer_single_product';
import user from './reducer_user_input';

const rootReducer = combineReducers({
    categories,
    products,
    single_category,
    single_product,
    user
});

export default rootReducer;
