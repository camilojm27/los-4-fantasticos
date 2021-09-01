import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REQUEST, PRODUCT_REQUEST_FAIL, PRODUCT_REQUEST_SUCCESS } from "../constants/productConstants";
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
    } catch (error) {
        const { msg } = error
        dispatch({ type: PRODUCT_LIST_FAIL, payload: msg })
    }
}

export const getProducts = () => async (dispatch) => {

    dispatch({ type: PRODUCT_LIST_REQUEST })
    try {

        const res = await axios.get(`${REACT_APP_API_URL}/product`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: res.data
        })
    }

    catch (error) {
        const { msg } = error.response.data
        dispatch({ type: PRODUCT_LIST_FAIL, payload: msg })
    }

}



export const addProduct = (data, token) => async (dispatch) => {
    console.log(data)
    dispatch({
        type: PRODUCT_REQUEST_FAIL
    })
    try {
        const hola = await axios.post(`${REACT_APP_API_URL}/product`, data, {
            headers: {
                'Authorization': token
            }

        })

        console.log(hola)
        dispatch({
            type: PRODUCT_REQUEST_SUCCESS
        })
    } catch (error) {
        console.log(error.response)
        const { msg } = error.response.data
        dispatch({
            type: PRODUCT_REQUEST_FAIL,
            payload: msg
        })
    }


}

export const deleteProduct = (id, token) => async (dispatch) => {
    console.log(id)
    dispatch({
        type: PRODUCT_REQUEST
    })
    try {
        await axios.delete(`${REACT_APP_API_URL}/product/${id}`, {
            headers: {
                'Authorization': token
            }
        })
        dispatch({
            type: PRODUCT_REQUEST_SUCCESS
        })
    } catch (error) {
        const { msg } = error.response.data
        dispatch({
            type: PRODUCT_REQUEST_FAIL,
            payload: msg
        })
    }

}

export const editProduct = (data, token) => async (dispatch) => {
    dispatch({
        type: PRODUCT_REQUEST
    })
    try {
        await axios.put(`${REACT_APP_API_URL}/product/${data.id}`, data, {
            headers: {
                'Authorization': token
            }
        })
        dispatch({
            type: PRODUCT_REQUEST_SUCCESS
        })
    } catch (error) {
        const { msg } = error.response.data
        dispatch({
            type: PRODUCT_REQUEST_FAIL,
            payload: msg
        })
    }


}

