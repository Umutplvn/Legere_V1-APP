import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchStart,
  fetchFail,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const login = async (userData) => {
    dispatch(fetchStart);
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}users/auth/login/`,
        userData
      );
      dispatch(loginSuccess(data));
      navigate("/")
        
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const register = async (userData) => {
    dispatch(fetchStart);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}register/`,
        userData
      );
      dispatch(registerSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { login, register };
};

export default useAuthCall
