import { combineReducers } from 'redux';
import categories from './reducer_categories';

const rootReducer = combineReducers({
    categories
});

export default rootReducer;
