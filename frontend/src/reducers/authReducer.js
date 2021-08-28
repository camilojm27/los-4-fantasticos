import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from '../constants/authConstants'

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user, messageLogin:"" , messageRegister:"" }
  : { isLoggedIn: false, user: null, messageLogin:"" , messageRegister:"" };

  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          messageRegister: payload.messageRegister
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,

        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          messageLogin: payload.messageLogin
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null
        };
      default:
        return state;
    }
  }