import { CHANGE_CATEGORY_PARAMS, CLEAR_CATEGORY_PARAMS, GET_CATEGORY } from '../actions';

const categoryParams = {
    page: 1,
    limit: 12,
    sort: 'price',
    order: 'asc',
    min_price: null,
    max_price: null,
};

const initialState = {
    categoryParams
}

export default function (state = initialState, action) {
console.log(action.type, action.payload);
    switch(action.type) {
        
        case CHANGE_CATEGORY_PARAMS:
            return {
                ...state,
                categoryParams: action.payload
            }

        case CLEAR_CATEGORY_PARAMS:
            // Resets the category params to the default
            return {
                ...state,
                categoryParams
            };

        case GET_CATEGORY:
            return {
                ...state,
                categoryParams: {
                    ...state.categoryParams,
                    min_price: action.payload.price_min,
                    max_price: action.payload.price_max
                }
            }

        default:
            return state;
    }
}