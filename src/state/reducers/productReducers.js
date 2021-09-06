import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_REQUEST,
    PRODUCT_REQUEST_FAIL,
    PRODUCT_REQUEST_SUCCESS
} from "../constants/productConstants";

const INITIAL_STATE = {
    loading: true,
    products: [],
    error: ""
}

export const getProductListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {...state, loading: true}
        case PRODUCT_LIST_SUCCESS:
            return {...state, loading: false, products: action.payload}
        case PRODUCT_LIST_FAIL:
            return {...state, loading: false, error: action.payload}

        case PRODUCT_REQUEST:
            return {...state, loading: true}
        case PRODUCT_REQUEST_SUCCESS:
            return {...state, loading: false}
        case PRODUCT_REQUEST_FAIL:
            return {...state, loading: false, error: action.payload}

        default:
            return state
    }
}
