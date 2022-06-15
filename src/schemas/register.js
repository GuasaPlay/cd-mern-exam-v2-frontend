import * as Yup from "yup";

export const initialValuesRegister = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
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
