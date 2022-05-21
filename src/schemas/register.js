import * as Yup from "yup";

export const initialValuesRegister = {
  name: "Oscar Calle",
  email: "oscar@gmail.com",
  password: "123456",
  confirmPassword: "123456",
};

export const FormSchemaRegister = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
