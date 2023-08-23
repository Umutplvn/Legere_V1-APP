import BlogNews from "../components/BlogNews";
import useDataCall from "../hooks/useDataCall";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const Home = () => {
  const {blogs}=useSelector((state)=>state?.blogs)

const {getData}=useDataCall()

useEffect(() => {
  getData("blogs")
}, [])

  
  return (


    <Box sx={{ backgroundColor: "#BCDEE6", height:"100%", padding:"1rem"}}>

      <BlogNews />
    </Box>
  );
};

export default Home;
