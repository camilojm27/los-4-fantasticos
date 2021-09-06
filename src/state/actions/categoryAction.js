import axios from 'axios'
import {
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_REQUEST,
    CATEGORY_REQUEST_FAIL,
    CATEGORY_REQUEST_SUCCESS
} from '../constants/categoryConstants'

const REACT_APP_API_URL = "https://ricuritas.herokuapp.com/api";
export const getCategory = () => async (dispatch) => {

    dispatch({type: CATEGORY_LIST_REQUEST})
    try {

        const res = await axios.get(`${REACT_APP_API_URL}/category`)
        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        dispatch({type: CATEGORY_LIST_FAIL, payload: e.message})
    }
}


export const addCategory = (data, token) => async (dispatch) => {

    dispatch({
        type: CATEGORY_REQUEST
    })
    try {
        await axios.post(`${REACT_APP_API_URL}/category`, data, {
            headers: {
                'Authorization': token
            }

        })
        dispatch({
            type: CATEGORY_REQUEST_SUCCESS
        })
    } catch (error) {
        const {msg} = error.response.data
        dispatch({
            type: CATEGORY_REQUEST_FAIL,
            payload: msg
        })
    }


}

export const deleteCategory = (id, token) => async (dispatch) => {
    dispatch({
        type: CATEGORY_REQUEST
    })
    try {
        await axios.delete(`${REACT_APP_API_URL}/category/${id}`, {
            headers: {
                'Authorization': token
            }
        })

        dispatch({
            type: CATEGORY_REQUEST_SUCCESS
        })
    } catch (error) {
        const {msg} = error.response.data
        dispatch({
            type: CATEGORY_REQUEST_FAIL,
            payload: msg
        })
    }

}

export const editCategory = (data, token) => async (dispatch) => {
    dispatch({
        type: CATEGORY_REQUEST
    })
    try {
        await axios.put(`${REACT_APP_API_URL}/category/${data.id}`, data, {
            headers: {
                'Authorization': token
            }
        })
        dispatch({
            type: CATEGORY_REQUEST_SUCCESS
        })
    } catch (error) {
        const {msg} = error.response.data
        dispatch({
            type: CATEGORY_REQUEST_FAIL,
            payload: msg
        })
    }


}

