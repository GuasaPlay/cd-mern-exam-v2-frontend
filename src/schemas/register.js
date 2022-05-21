import * as Yup from "yup";

export const initialValuesRegister = {
  username: "oscar.calle",
  email: "oscar@gmail.com",
  password: "0106179450",
  confirmPassword: "0106179450",
};

export const FormSchemaRegister = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
