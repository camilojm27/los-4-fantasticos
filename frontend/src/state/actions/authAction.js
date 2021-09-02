import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "../../state/constants/authConstants";
import AuthService from '../../services/auth.service'
export const signUp = (data) => (dispatch) => {

  return AuthService.register(data).then(
    (res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { user: res.user, messageRegister: "" }
      })
      dispatch(login(data.email, data.password))
      return Promise.resolve();
    }, (error) => {

      const messageRegister = error.response.data.msg

      dispatch({
        type: REGISTER_FAIL,
        payload: { messageRegister}
      });
    })
}

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {

      
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    },
    (error) => {
      const messageLogin = error.response.data.msg
      console.log(messageLogin)
      dispatch({
        type: LOGIN_FAIL,
        payload: { messageLogin }
      });
    }
  )
}

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};