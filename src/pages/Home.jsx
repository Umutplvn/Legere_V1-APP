import BlogNews from "../components/BlogNews";
import useDataCall from "../hooks/useDataCall";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { homeStyle } from "../styles/globalStyles";

const Home = () => {

const {getData}=useDataCall()

useEffect(() => {
  getData("blogs")
}, [])

  
  return (


    <div style={homeStyle} >

      <BlogNews />
    </div>
  );
};

export default Home;
