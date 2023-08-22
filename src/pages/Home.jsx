import BlogNews from "../components/BlogNews";
import useDataCall from "../hooks/useDataCall";
import { useEffect } from "react";
import { Box } from "@mui/material";

const Home = () => {

const {getData}=useDataCall()

useEffect(() => {
  getData("blogs")
  
}, [])

  
  return (


    <Box>

      <BlogNews />
    </Box>
  );
};

export default Home;
