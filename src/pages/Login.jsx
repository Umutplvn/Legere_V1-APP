import React from "react";
import { Box } from "@mui/material";
import AuthForm from "../components/AuthForm";

import { loginStyle } from "../styles/globalStyles";


const Login = () => {

  return (
    <Box 
   sx={loginStyle}>
      <AuthForm/>
    </Box>
  );
};

export default Login
