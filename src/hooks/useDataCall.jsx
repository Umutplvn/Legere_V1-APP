import useAxios from "./useAxios"
import { getDataSuccess, fetchStart, fetchFail, getLikeSuccess } from "../features/blogDataSlice"
import { useDispatch } from "react-redux"

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
        console.log(error);
    }
}

const postData = async(url) => {
    dispatch(fetchStart())
    try {
      const{data}= await axiosWithToken.post(url) 
      dispatch(getLikeSuccess(data))
      console.log("data",data);

    } catch (error) {
        console.log(error);
    }
}




const deleteData = ()=>{

}




  return {getData, postData, deleteData}
}

export default useDataCall