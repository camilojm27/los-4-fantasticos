import {
    AVENUES_LIST_FAIL,
    AVENUES_LIST_REQUEST,
    AVENUES_LIST_SUCCESS,
    AVENUES_REQUEST,
    AVENUES_REQUEST_FAIL,
    AVENUES_REQUEST_SUCCESS,
    AVENUESELECTED_CHANGE
} from "../constants/avenuesConstants";

const INITIAL_STATE = {
    loading: true,
    avenues: [],
    error: "",
    avenueSelected: 1,
}

export const getAvenuesListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AVENUES_LIST_REQUEST:
            return { ...state, loading: true }
        case AVENUES_LIST_SUCCESS:
            return { ...state, loading: false, avenues: action.payload }
        case AVENUES_LIST_FAIL:
            return { ...state, loading: false, error: action.payload }


        case AVENUES_REQUEST:
            return { ...state, loading: true }
        case AVENUES_REQUEST_SUCCESS:
            return { ...state, loading: false }
        case AVENUES_REQUEST_FAIL:
            return { ...state, loading: false, error: action.payload }
        case AVENUESELECTED_CHANGE:
            return { ...state, avenueSelected: action.payload.avenueSelected }

        default:
            return state
    }
}

