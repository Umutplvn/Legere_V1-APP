import Box from "@mui/material/Box";
import { Formik, Form } from "formik";
import { object, string, number, date } from "yup";
import useAuthCall from "../hooks/useAuthCall";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  btnStyle,
  flexBox,
  flexContainer,
  flexBoxRow,
  icon,
  loginStyle,
} from "../styles/globalStyles";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Container, Grid, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const AuthForm = () => {
  const { login } = useAuthCall();
  const [visible, setVisible] = useState(true);
  const setPass = () => {
    setVisible(!visible);
  };

  let loginScheme = object({
    email: string()
      .email("Please enter a valid email")
      .required("This field is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password must at least 8 characters")
      .max(16, "Password must be at most 16 characters")
      .matches(/\d+/, "There must be at least 1 number")
      .matches(/[a-z]/, "There must be at least one lower case")
      .matches(/[A-Z]/, "There must be at least one capital case")
      .matches(
        /[!,?{}><%&$#+-.]/,
        "There must be at least one spacial character"
      ),
    username: string()
      .min(2, "Username must at least 2 characters")
      .required("This field is required"),
  });

  return (
    <Box component={"div"} sx={loginStyle}>
      <Grid container xs={10} sm={6} md={4} lg={3} sx={flexContainer}>
        <Grid item >
          <Typography
            sx={{
              fontWeight: "700",
              fontFamily: "Ruwudu, serif",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            LOGIN
          </Typography>
        </Grid>


        <Grid item m={"auto"} sx={flexBox}>
        <Formik
          initialValues={{ email: "", password: "", username: "" }}
          validationSchema={loginScheme}
          onSubmit={(values, action) => {
            login(values);
            action.resetForm();
            action.setSubmitting(false);
          }}
        >
          {({ handleChange, handleBlur, values, touched, errors }) => (
              <Form>
                <TextField
                  variant="standard"
                  id="username"
                  type="text"
                  label="Username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.username && Boolean(errors.username)}
                  helperText={errors.username}
                  sx={{width:"100%"}}
                />
                <TextField
                  variant="standard"
                  id="email"
                  label="Email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={errors.email}
                  sx={{width:"100%"}}

                />

                {visible ? (
                  <Box
                    sx={{
                      width: "270px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "end",
                    }}
                  >
                    <TextField
                      variant="standard"
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={errors.password}
                      sx={{width:"100%"}}

                    />
                    <VisibilityOffIcon onClick={setPass} />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      width: "270px",
                      display: "flex",
                      position: "inherit",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "end",
                    }}
                  >
                    <TextField
                      variant="standard"
                      id="password"
                      label="Password"
                      name="password"
                      type="text"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{width:"100%"}}
                      error={touched.password && Boolean(errors.password)}
                      helperText={errors.password}
                    />
                    <VisibilityIcon onClick={setPass} />
                  </Box>
                )}

                <Button type="submit" sx={btnStyle}>
                  Login
                </Button>
              </Form>
          )}
        </Formik>
          </Grid>

        <Box sx={flexBoxRow}>
          <GitHubIcon sx={icon} />
          <FacebookIcon sx={icon} />
          <GoogleIcon sx={icon} />
        </Box>
      </Grid>
    </Box>
  );
};

export default AuthForm;
