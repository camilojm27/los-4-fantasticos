import axios from 'axios'
import {
    PROMOTION_LIST_FAIL,
    PROMOTION_LIST_REQUEST,
    PROMOTION_LIST_SUCCESS,
    PROMOTION_REQUEST,
    PROMOTION_REQUEST_FAIL,
    PROMOTION_REQUEST_SUCCESS
} from '../constants/promotionConstants'

const REACT_APP_API_URL = "https://ricuritas.herokuapp.com/api";
export const getPromotion = () => async (dispatch) => {

    dispatch({ type: PROMOTION_LIST_REQUEST })
    try {

        const res = await axios.get(`${REACT_APP_API_URL}/promotion`)
        dispatch({
            type: PROMOTION_LIST_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        dispatch({ type: PROMOTION_LIST_FAIL, payload: e.message })
    }
}


export const addPromotion = (data, token) => async (dispatch) => {

    dispatch({
        type: PROMOTION_REQUEST
    })
    try {
        await axios.post(`${REACT_APP_API_URL}/promotion`, data, {
            headers: {
                'Authorization': token
            }

        })
        dispatch({
            type: PROMOTION_REQUEST_SUCCESS
        })
    } catch (error) {
        const { msg } = error.response.data
        dispatch({
            type: PROMOTION_REQUEST_FAIL,
            payload: msg
        })
    }


}

export const deletePromotion = (id, token) => async (dispatch) => {
    dispatch({
        type: PROMOTION_REQUEST
    })
    try {
        await axios.delete(`${REACT_APP_API_URL}/promotion/${id}`, {
            headers: {
                'Authorization': token
            }
        })

        dispatch({
            type: PROMOTION_REQUEST_SUCCESS
        })
    } catch (error) {
        const { msg } = error.response.data
        dispatch({
            type: PROMOTION_REQUEST_FAIL,
            payload: msg
        })
    }

}

export const editPromotion = (data, token) => async (dispatch) => {
    dispatch({
        type: PROMOTION_REQUEST
    })
    try {
        await axios.put(`${REACT_APP_API_URL}/promotion/${data.id}`, data, {
            headers: {
                'Authorization': token
            }
        })
        dispatch({
            type: PROMOTION_REQUEST_SUCCESS
        })
    } catch (error) {
        const { msg } = error.response.data
        dispatch({
            type: PROMOTION_REQUEST_FAIL,
            payload: msg
        })
    }


}

