import axios from 'axios';

// Consts
export const LIST_CATEGORIES = 'list-categories';
export const GET_CATEGORY = 'get-category';
export const LIST_PRODUCTS = 'list-products';
export const GET_PRODUCT = 'get-product';

const URL = 'https://bp-interview.herokuapp.com';


// Actions
export function listCategories() {

    const headers = { 'Content-Type': 'application/json' }

    const request = axios.get(`${URL}/categories/`, headers);
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type: LIST_CATEGORIES, payload: data });
        })
    }
}

export function getCategory(ID) {

    const headers = { 'Content-Type': 'application/json' }

    const request = axios.get(`${URL}/categories/${ID}`, headers);
    return (dispatch) => {

        request.then(({data}) => {
            dispatch({ type: GET_CATEGORY, payload: data });
        })
    }
}

export function listProducts(ID) {

    const headers = { 'Content-Type': 'application/json' }

    const request = axios.get(`${URL}/categories/${ID}/products`, headers);
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type: LIST_PRODUCTS, payload: data });
        })
    }
}

export function getProduct(ID) {
    
    const headers = { 'Content-Type': 'application/json' }

    const request = axios.get(`${URL}/products/${ID}`, headers);
    return (dispatch) => {

        request.then(({data}) => {
            dispatch({ type: GET_PRODUCT, payload: data });
        })
    }
}
