import { Route, Routes } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Header from "../components/Header";
import Profile from "../pages/Profile";
import About from "../pages/About";
import DetailPage from "../pages/DetailPage";
import NewBlog from "../pages/NewBlog";
// import PrivateRouter from "../pages/PrivateRouter";

const Approuter = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route index element={<Home />} />
      {/* <Route path="/" element={<PrivateRouter/>}> */}
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/detail/:id" element={<DetailPage/>}/>
      <Route path="/new-blog" element={<NewBlog/>}/>

      {/* </Route> */}
      <Route path="/register" element={<Register />} />
    </Routes>
    </>
  );
};

export default Approuter;
