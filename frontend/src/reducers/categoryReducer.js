import {CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_REQUEST, CATEGORY_REQUEST_FAIL, CATEGORY_REQUEST_SUCCESS} from "../constants/categoryConstants";

const INITIAL_STATE = {
    loading: true, 
    categories: [],
    error: ""
}

export const getCategoryListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return {...state,loading: true}
        case CATEGORY_LIST_SUCCESS:
            return {...state,loading: false, categories: action.payload}
        case CATEGORY_LIST_FAIL:
            return {...state,loading: false, error: action.payload}


        case CATEGORY_REQUEST:
            return {...state,loading: true}
        case CATEGORY_REQUEST_SUCCESS:
            return {...state,loading:false}
        case CATEGORY_REQUEST_FAIL:
            return {...state,loading:false,error: action.payload}

        default:
            return state
    }
}

