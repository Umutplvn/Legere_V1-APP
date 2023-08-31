import useAxios from "./useAxios";
import {
  getDataSuccess,
  fetchStart,
  fetchFail,
  getDataLikeSuccess,
  postDataSuccess,
  
} from "../features/blogDataSlice";
import { useDispatch } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useDataCall = () => {
  const { axiosPublic, axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`${url}/`);
      dispatch(getDataSuccess({ url, data }));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error);
    }
  };


  const postData = async (url, id, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`${url}/${id}`, info);
      console.log("data",data);
      dispatch(postDataSuccess({ url, data }));
      getData("blogs")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.detail);
      console.log(error);
    }
  };
  const putData = async (url, id, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.put(`${url}/${id}/`, info);
      dispatch(postDataSuccess({ url, data }));
      getData("blogs")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.detail);
      console.log(error);
    }
  };


  

  const deleteData =async (id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`blogs/${id}`)
    toastSuccessNotify("Successfully deleted")
    getData("blogs")
    } catch (error) {
      toastErrorNotify(error)
      dispatch(fetchFail())
    }
  };

  


 


  return { getData, deleteData, postData, putData};
};

export default useDataCall;
