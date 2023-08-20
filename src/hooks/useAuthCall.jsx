import axios from "axios"
import { useDispatch } from "react-redux"
import {fetchStart, fetchFail, loginSuccess, logoutSuccess, registerSuccess} from authSlice


const useAuthCall = () => {
    const dispatch = useDispatch()
  
const login=async(userData)=>{
    dispatch(fetchStart)
    try {
      const {data} = await axios(`${import.meta.env.REACT_BASE_URL}/users/auth/login/`, userData)
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(fetchFail())
        console.log(error);
    }
}

const register=async(userData)=>{
    dispatch(fetchStart)
    try {
      const {data} = await axios(`${import.meta.env.REACT_BASE_URL}/register/`, userData)
        dispatch(registerSuccess(data))
    } catch (error) {
        dispatch(fetchFail())
        console.log(error);
    }
}


  






    return {login, register}
  
}

export default useAuthCall