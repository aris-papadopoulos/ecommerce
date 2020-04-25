import { LIST_CATEGORIES } from '../actions';
import { orderBy } from 'lodash';

export default function (state = [], action) {

    switch(action.type) {
        
        case LIST_CATEGORIES:
            const orderedCategories = orderBy(action.payload, ['position'], ['asc']);
            return orderedCategories;

        default:
            return state;
    }
}