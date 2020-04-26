import axios from 'axios';

// Consts
export const LIST_CATEGORIES = 'list-categories';
export const GET_CATEGORY = 'get-category';
export const LIST_PRODUCTS = 'list-products';
export const GET_PRODUCT = 'get-product';

export const CLEAR_PRODUCTS = 'clear-products';
export const CLEAR_SINGLE_PRODUCT = 'clear-single-product';
export const CLEAR_CATEGORY = 'clear-category';

export const CHANGE_CATEGORY_PARAMS = 'change-category-params';
export const CLEAR_CATEGORY_PARAMS = 'clear-category-params';


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

export function clearCategory() {
    return (dispatch) => dispatch({ type: CLEAR_CATEGORY, payload: null });   
}

export function listProducts(ID, params) {

    const config = {
        params,
        headers: { 'Content-Type': 'application/json' }
    }

    const request = axios.get(`${URL}/categories/${ID}/products`, config);
    return (dispatch) => {
        clearProducts();
        request.then(({data}) => {
            dispatch({ type: LIST_PRODUCTS, payload: data });
        })
    }
}

export function clearProducts() {
    return (dispatch) => dispatch({ type: CLEAR_PRODUCTS, payload: null });
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

export function clearSingleProduct() {
    return (dispatch) => dispatch({ type: CLEAR_SINGLE_PRODUCT, payload: null });   
}

export function changeCategoryParams(params) {
    return (dispatch) => dispatch({ type: CHANGE_CATEGORY_PARAMS, payload: params });   
}

export function clearCategoryParams(params) {
    return (dispatch) => dispatch({ type: CLEAR_CATEGORY_PARAMS, payload: null });   
}
