import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL + '/auth/';

const register = (nombre,doc_type,doc_num,phone_num,birth,email,password,latitude,longitude,address) =>{
    return axios
    .post(REACT_APP_API_URL + "signup",{
        name : nombre,
        doc_type,
        doc_num,
        phone_num,
        birth,
        role: 0,
        email,
        password,
        latitude,
        longitude,
        available: true,
        address
    })
}

const login = (email,password) => {
    return axios
    .post(REACT_APP_API_URL + "signin", {
        email,
        password,
    })
    .then((response) => {
        if (response.data.Authorization) {
            console.log()
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