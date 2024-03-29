import  Axios from "axios";
import {
    CART_ADD_ITEM,
    CART_ADD_FAIL,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD, CART_EMPTY
} from "../constants/cartConstants";

const API = 'https://ricuritas.herokuapp.com/api'

export const addToCart = (productID, qty) => async (dispatch, getState) => {
    try{
        const {data} = await Axios.get(`${API}/product/${productID}`)
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                name: data.name,
                image: data.image,
                price: data.unit_price,
                product: data.id,
                qty: qty,
            }
        })
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    } catch (e) {
        console.error(e)
        dispatch({type: CART_ADD_FAIL, payload: e.message})
    }


}
export const emptyCart = () => (dispatch) => {
    dispatch({ type: CART_EMPTY});
    localStorage.removeItem('cartItems');
};

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
    localStorage.setItem('paymentMethod', JSON.stringify(data));
};
