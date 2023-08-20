import { Route, Routes } from 'react-router'
import Login  from "../pages/Login"
import Home  from "../pages/Home"


const Approuter = () => {
  return (
<Routes>
<Route path="/login" element={<Login/>}/>
<Route path='/' element={<Home/>}/>
  </Routes>

  )
}

export default Approuter