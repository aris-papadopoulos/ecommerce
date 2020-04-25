import { GET_CATEGORY, CLEAR_CATEGORY } from '../actions';

export default function (state = null, action) {
    
    switch(action.type) {
        
        case GET_CATEGORY:
            return action.payload;

        case CLEAR_CATEGORY:
            return null;

        default:
            return state;
    }
}