import axios from 'axios'
import {
    AVENUESELECTED_CHANGE,
    AVENUES_LIST_FAIL,
    AVENUES_LIST_REQUEST,
    AVENUES_LIST_SUCCESS,
    AVENUES_REQUEST,
    AVENUES_REQUEST_FAIL,
    AVENUES_REQUEST_SUCCESS
} from '../constants/avenuesConstants'

const REACT_APP_API_URL = "https://ricuritas.herokuapp.com/api";
export const getAvenue = () => async (dispatch) => {

    dispatch({type: AVENUES_LIST_REQUEST})
    try {

        const res = await axios.get(`${REACT_APP_API_URL}/restaurant`)
        dispatch({
            type: AVENUES_LIST_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        dispatch({type: AVENUES_LIST_FAIL, payload: e.message})
    }
}


export const addAvenue = (data, token) => async (dispatch) => {

    dispatch({
        type: AVENUES_REQUEST
    })
    try {
        await axios.post(`${REACT_APP_API_URL}/restaurant`, data, {
            headers: {
                'Authorization': token
            }

        })
        dispatch({
            type: AVENUES_REQUEST_SUCCESS
        })
    } catch (error) {
        const {msg} = error.response.data
        dispatch({
            type: AVENUES_REQUEST_FAIL,
            payload: msg
        })
    }


}

export const deleteAvenue = (id, token) => async (dispatch) => {
    dispatch({
        type: AVENUES_REQUEST
    })
    try {
        await axios.delete(`${REACT_APP_API_URL}/restaurant/${id}`, {
            headers: {
                'Authorization': token
            }
        })

        dispatch({
            type: AVENUES_REQUEST_SUCCESS
        })
    } catch (error) {
        const {msg} = error.response.data
        dispatch({
            type: AVENUES_REQUEST_FAIL,
            payload: msg
        })
    }

}

export const editAvenue = (data, token) => async (dispatch) => {
    dispatch({
        type: AVENUES_REQUEST
    })
    try {
        await axios.put(`${REACT_APP_API_URL}/restaurant/${data.id}`, data, {
            headers: {
                'Authorization': token
            }
        })
        dispatch({
            type: AVENUES_REQUEST_SUCCESS
        })
    } catch (error) {
        const {msg} = error.response.data
        dispatch({
            type: AVENUES_REQUEST_FAIL,
            payload: msg
        })
    }


}

export const avenueSelected = (idAvenue) => async (dispatch) => {
    dispatch({
        type: AVENUESELECTED_CHANGE,
        payload: {avenueSelected:idAvenue}
    })
}