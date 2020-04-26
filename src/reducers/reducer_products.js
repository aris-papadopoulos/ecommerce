import { LIST_PRODUCTS, CLEAR_PRODUCTS } from '../actions';

export default function (state = [], action) {

    switch(action.type) {
        
        case LIST_PRODUCTS:
            return action.payload

        case CLEAR_PRODUCTS:
            return [];

        default:
            return state;
    }
}