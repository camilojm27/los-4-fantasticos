import axios from "axios";

const REACT_APP_API_URL = "https://ricuritas.herokuapp.com/api" + '/auth/';

const register = (data) =>{
    return axios.post(REACT_APP_API_URL + "signup",data).then((response) => {return response.data})
}

const login = (email,password) => {
    return axios.post(REACT_APP_API_URL + "signin", {
        email,
        password,
    })
    .then((response) => {
        if (response.data.Authorization) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data
    })
}

const logout = () => {
    localStorage.removeItem("user");
  };

  export default {
    register,
    login,
    logout,
  };