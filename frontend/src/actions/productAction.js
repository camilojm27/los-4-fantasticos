import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "../constants/productConstants";
import axios from "axios";
export const getProductList = () => async(dispatch) => {
    dispatch({type: PRODUCT_LIST_REQUEST})

    try{
        const {data} = await axios.get('/product')
        for (let i = 0; i < 10; i++) {
         data.push(data[0]);
        }
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    }catch (e) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: e.message})
    }
}