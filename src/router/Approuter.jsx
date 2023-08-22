import { Route, Routes } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Header from "../components/Header";
import Profile from "../pages/Profile";
import About from "../pages/About";

const Approuter = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
};

export default Approuter;
