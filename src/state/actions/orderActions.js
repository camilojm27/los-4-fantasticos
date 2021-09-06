import {ORDER_LIST_MINE_FAIL, ORDER_LIST_MINE_REQUEST, ORDER_LIST_MINE_SUCCESS} from "../constants/orderConstants";
import Axios from "axios";

const REACT_APP_API_URL = "https://ricuritas.herokuapp.com/api";

//TODO: Crear el endpoint order/mine para traer todas las ordenes de los usuarios

export const orderListMineAction = () => async (dispatch) => {

    dispatch({type: ORDER_LIST_MINE_REQUEST});

    try {
        const {data} = await Axios.get(`${REACT_APP_API_URL}/order/mine`, {
                // headers: {Authorization: `Bearer ${token}`}
            }
        )

        dispatch({type: ORDER_LIST_MINE_SUCCESS, payload: data});

    } catch (error) {
        dispatch({
            type: ORDER_LIST_MINE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
