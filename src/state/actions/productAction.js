import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_REQUEST,
    PRODUCT_REQUEST_FAIL,
    PRODUCT_REQUEST_SUCCESS,
    RESET_PRODUCT_LIST
} from "../constants/productConstants";
import axios from "axios";

const REACT_APP_API_URL = "https://ricuritas.herokuapp.com/api";



export const getProducts = (avenue) => async (dispatch) => {
    dispatch({type:RESET_PRODUCT_LIST})
    dispatch({type: PRODUCT_LIST_REQUEST})
    try {
        if(avenue === undefined){
            avenue = 1;
        }
        const res = await axios.get(`${REACT_APP_API_URL}/product/restaurant/${avenue}`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        const {msg} = error
        dispatch({type: PRODUCT_LIST_FAIL, payload: msg})
    }

}


export const addProduct = (data, token) => async (dispatch) => {
    dispatch({
        type: PRODUCT_REQUEST
    })
    try {
        await axios.post(`${REACT_APP_API_URL}/product`, data, {
            headers: {
                'Authorization': token
            }

        })
        dispatch({
            type: PRODUCT_REQUEST_SUCCESS
        })
    } catch (error) {
        const {msg} = error.response.data
        dispatch({
            type: PRODUCT_REQUEST_FAIL,
            payload: msg
        })
    }


}

export const deleteProduct = (id, token,avenue) => async (dispatch) => {
    dispatch({
        type: PRODUCT_REQUEST
    })
    try {
        await axios.delete(`${REACT_APP_API_URL}/product/${id}/restaurant/${avenue}`, {
            headers: {
                'Authorization': token
            }
        })
        dispatch({
            type: PRODUCT_REQUEST_SUCCESS
        })
    } catch (error) {
        const {msg} = error.response.data
        dispatch({
            type: PRODUCT_REQUEST_FAIL,
            payload: msg
        })
    }

}

export const editProduct = (data, token,avenue) => async (dispatch) => {
    dispatch({
        type: PRODUCT_REQUEST
    })
    try {
        await axios.put(`${REACT_APP_API_URL}/product/${data.get("id")}/restaurant/${avenue}`, data, {
            headers: {
                'Authorization': token
            }
        })
        dispatch({
            type: PRODUCT_REQUEST_SUCCESS
        })
    } catch (error) {
        const {msg} = error.response.data
        dispatch({
            type: PRODUCT_REQUEST_FAIL,
            payload: msg
        })
    }


}
