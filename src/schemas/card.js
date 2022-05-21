import * as Yup from "yup";

export const initialValuesCard = {
  name: "",
  due: "",
};

export const FormSchemaCard = Yup.object().shape({
  name: Yup.string()
    .required("Name of the project is required")
    .min(3, "Name of the project must be at least 3 characters"),
  due: Yup.date().required("Due date is required"),
});
