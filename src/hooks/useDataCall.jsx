import useAxios from "./useAxios"
import { getDataSuccess, fetchStart, fetchFail } from "../features/blogDataSlice"
import { useDispatch } from "react-redux"

const useDataCall = () => {

const {axiosPublic} =useAxios()
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

const postData = ()=>{

}

const deleteData = ()=>{

}




  return {getData, postData, deleteData}
}

export default useDataCall