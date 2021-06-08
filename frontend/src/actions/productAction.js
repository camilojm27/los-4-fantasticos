import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";
import axios from "axios";

const REACT_APP_API_URL = "https://ricuritas.herokuapp.com/api";

export const getProductList = () => async (dispatch) => {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    try {
        const { data } = await axios.get(`${REACT_APP_API_URL}/product`)
        for (let i = 0; i < 10; i++) {
            data.push(data[0]);
        }
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (e) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: e.message })
    }
}

export const getProducts = () => async (dispatch) => {

    dispatch({ type: PRODUCT_LIST_REQUEST })
    try {
            
        const res = await axios.get(`${REACT_APP_API_URL}/product`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: res.data})
    }

    catch (e) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: e.message })
    }

}