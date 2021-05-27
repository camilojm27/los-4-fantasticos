import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
  } from "../constants/authConstants";

  import AuthService from '../services/auth.service'
  export const register = (nombre,doc_type,doc_num,phone_num,birth,email,password,latitude,longitude,address) => (dispatch) => {
      return AuthService.register(nombre,doc_type,doc_num,phone_num,birth,email,password,latitude,longitude,address).then(
        (response) => {
            dispatch({
              type: REGISTER_SUCCESS,
            }
            
      )

      return Promise.resolve();
        },
        
      (error) => {
          console.log(error)
          dispatch({
            type: REGISTER_FAIL,
          });
          return Promise.reject();
      }
      )
        }
      
export const login = (email,password) => (dispatch) => {
    return AuthService.login(email, password).then(
        (data) => {
            dispatch({
              type: LOGIN_SUCCESS,
              payload: { user: data },
            });
            return Promise.resolve();
        },
        (error) => {
            console.log(error)
            dispatch({
              type: LOGIN_FAIL,
            });
            return Promise.reject();
        }
    )
}
  
export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };