import useAxios from "./useAxios"
import { getDataSuccess, fetchStart, fetchFail, getDataLikeSuccess } from "../features/blogDataSlice"
import { useDispatch } from "react-redux"
import {toastErrorNotify} from "../helper/ToastNotify"

const useDataCall = () => {

const {axiosPublic, axiosWithToken} =useAxios()
const dispatch=useDispatch()


const getData = async (url)=>{
    dispatch(fetchStart)
    try {
        const {data} =await axiosPublic(`${url}/`)
        dispatch(getDataSuccess({url, data}))
        
    } catch (error) {
        dispatch(fetchFail())
        toastErrorNotify(error)
    }
}

const postData = async(url) => {}

const deleteData = ()=>{}


    const getDataLikes = async (id) => {
        dispatch(fetchStart())
        try {
          const [likes, blogs] = await Promise.all([
            axiosWithToken.post(`${id}`),
            axiosWithToken("blogs/"),
          ])
    console.log("likes",likes, 'blog', blogs);
          dispatch(
            getDataLikeSuccess([likes?.data, blogs?.data])
          )

        } catch (error) {
          dispatch(fetchFail())
          toastErrorNotify(`You have to login first`)
        }
      }









  return {getData, deleteData, getDataLikes}
}

export default useDataCall