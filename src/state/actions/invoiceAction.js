import axios from 'axios'
import {INVOICE_LIST_FAIL, INVOICE_LIST_REQUEST, INVOICE_LIST_SUCCESS} from '../constants/invoiceConstants'

const REACT_APP_API_URL = "https://ricuritas.herokuapp.com/api";

export const getInvoice = (token,avenueSelected) => async (dispatch) => {
    dispatch({type: INVOICE_LIST_REQUEST})

    try {

        const res = await axios.get(`${REACT_APP_API_URL}/order/restaurant/${avenueSelected}`,{
            headers:{
                'Authorization' : token
            }
        })


        dispatch({
            type: INVOICE_LIST_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        dispatch({type: INVOICE_LIST_FAIL, payload: e.message})
    }
}


