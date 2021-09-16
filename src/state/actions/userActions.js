import axios from "axios"
import { USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../constants/userConstants"

const REACT_APP_API_URL = "https://ricuritas.herokuapp.com/api";

export const getUsers = (token) => async (dispatch) => {
    dispatch({
        type: USER_LIST_REQUEST
    })

    try {
        const res = await axios.get(`${REACT_APP_API_URL}/user/allUsers`, {
            headers: {
                'Authorization': token
            }})

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({ type: USER_LIST_FAIL, payload: e.message })
    }
}

export const addUser = (data, token) => async (dispatch) => {

}

export const deleteUser = (id, token) => async (dispatch) => {

}

export const editUser = (data, token) => async (dispatch) => {

}