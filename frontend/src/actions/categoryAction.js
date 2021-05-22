import axios from 'axios'
import {CATEGORY_LIST_FAIL,CATEGORY_LIST_SUCCESS,CATEGORY_LIST_REQUEST } from '../constants/categoryConstants'
export const getCategory = () => async (dispatch) => {

    dispatch({type:CATEGORY_LIST_REQUEST})
    try{

          const res = await axios.get('https://ricuritas.herokuapp.com/api/category')

          dispatch({
              type: CATEGORY_LIST_SUCCESS,
              payload: res.data
          })
    }
    catch (e) {
        dispatch ({type:CATEGORY_LIST_FAIL,payload: e.message})
    }
}

