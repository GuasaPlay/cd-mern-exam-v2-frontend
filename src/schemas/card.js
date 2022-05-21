import * as Yup from "yup";

export const initialValuesCard = {
  name: "",
  due: "",
};

export const FormSchemaCard = Yup.object().shape({
  name: Yup.string().required("Name of the project is required"),
  due: Yup.date().required("Due date is required"),
});
