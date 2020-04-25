import { LIST_CATEGORIES } from '../actions';


// const initialState = {
//     status: null,
//     token: null,
//     isLoading: false
// }

export default function (state = [], action) {
    
    switch(action.type) {
        
        case LIST_CATEGORIES:
            return action.payload;

        default:
            return state;
    }
}