import { LIST_PRODUCTS } from '../actions';

export default function (state = [], action) {

    switch(action.type) {
        
        case LIST_PRODUCTS:
            return action.payload;

        default:
            return state;
    }
}