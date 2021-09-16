import {
    USER_LIST_REQUEST,
    USER_LIST_FAIL,
    USER_LIST_SUCCESS,
    USER_REQUEST,
    USER_REQUEST_FAIL,
    USER_REQUEST_SUCCESS
} from "../constants/userConstants";

const INITIAL_STATE = {
    loading: true,
    users: [],
    error: ""
}

export const getUsersListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return {...state, loading: true}
        case USER_LIST_SUCCESS:
            return {...state, loading: false, users: action.payload}
        case USER_LIST_FAIL:
            return {...state, loading: false, error: action.payload}


        case USER_REQUEST:
            return {...state, loading: true}
        case USER_REQUEST_SUCCESS:
            return {...state, loading: false}
        case USER_REQUEST_FAIL:
            return {...state, loading: false, error: action.payload}

        default:
            return state
    }
}

