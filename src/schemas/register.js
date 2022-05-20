import * as Yup from "yup";

export const initialValuesRegister = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
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
