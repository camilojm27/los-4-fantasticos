import axios from "axios"
import { USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS,USER_REQUEST, USER_REQUEST_FAIL, USER_REQUEST_SUCCESS } from "../constants/userConstants"

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


    dispatch({
        type: USER_REQUEST
    })
    try {
        await axios.post(`${REACT_APP_API_URL}/auth/signup`,data,{
            headers:{
                'Authorization': token
            }
        })

        dispatch({
            type: USER_REQUEST_SUCCESS
        })
    } catch (error) {
        dispatch({
            type:USER_REQUEST_FAIL,
            payload: {error: error.response.data.msg}
        })
    }
}

export const deleteUser = (id, token) => async (dispatch) => {
    dispatch({
        type: USER_REQUEST
    })

    try {
        await axios.delete(`${REACT_APP_API_URL}/user/admin/${id}`,{
            headers:{
                'Authorization': token
            }
        })
        dispatch({
            type: USER_REQUEST_SUCCESS
        })
    } catch (error) {
        dispatch({
            type:USER_REQUEST_FAIL,
            payload: {error: error.response.data.msg}
        })
    }
}

export const editUser = (data, token) => async (dispatch) => {
    dispatch({
        type: USER_REQUEST
    })
    try {
        console.log("voy aqui",data)
        await axios.put(`${REACT_APP_API_URL}/user/admin/${data.doc_num}`,data,{
            headers:{
                'Authorization': token
            }
        })
        dispatch({
            type: USER_REQUEST_SUCCESS
        })
    } catch (error) {
        const {msg} = error.response.data
        dispatch({
            type:USER_REQUEST_FAIL,
            payload: msg
        })
    }
}