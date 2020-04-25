import { GET_PRODUCT, CLEAR_SINGLE_PRODUCT } from '../actions';

export default function (state = null, action) {

    switch(action.type) {
        
        case GET_PRODUCT:
            return action.payload

        case CLEAR_SINGLE_PRODUCT:
            return null;

        default:
            return state;
    }
}