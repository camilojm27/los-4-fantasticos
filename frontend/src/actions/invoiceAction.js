import axios from 'axios'
import { INVOICE_LIST_FAIL,INVOICE_LIST_SUCCESS,INVOICE_LIST_REQUEST } from '../constants/productConstants'
export const getInvoice = () => async (dispatch) => {
    dispatch({type:INVOICE_LIST_REQUEST})

    try{
          const res = await axios.get('https://ricuritas.herokuapp.com/api/invoice')

          dispatch({
              type: INVOICE_LIST_SUCCESS,
              payload: res.data
          })
    }
    catch (e) {
        dispatch ({type:INVOICE_LIST_FAIL,payload: e.message})
    }
}

