import useAxios from "./useAxios";
import {
  getDataSuccess,
  fetchStart,
  fetchFail,
  getDataLikeSuccess,
  postDataSuccess,
  postDraftSuccess
  
} from "../features/blogDataSlice";
import { useDispatch } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { async } from "react-input-emoji";

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
      dispatch(postDataSuccess({ url, data }));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.detail);
      console.log(error);
    }
  };



  

  const deleteData =async (id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`blogs/${id}/`)
    toastSuccessNotify("Successfully deleted")
    getData("blogs")
    } catch (error) {
      toastErrorNotify(error)
      dispatch(fetchFail())
    }
  };

  const getDataLikes = async (id) => {
    dispatch(fetchStart());
    try {
      const [likes, blogs] = await Promise.all([
        axiosWithToken.post(`${id}`),
        axiosWithToken("blogs/"),
      ]);
      dispatch(getDataLikeSuccess([likes?.data, blogs?.data]));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`You have to login first`);
    }
  };


 


  return { getData, deleteData, getDataLikes, postData};
};

export default useDataCall;
