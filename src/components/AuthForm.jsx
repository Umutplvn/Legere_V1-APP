import Box from "@mui/material/Box";
import { Formik, Form } from "formik";

const AuthForm = () => {
  return (
    <Box>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidation}
        // onSubmit={
           // login()
        // }
      >
        
        <Form>
            asdasd
        </Form>
      </Formik>
    </Box>
  );
};

export default AuthForm;
