import dayjs from "dayjs";
import { Button } from "components/ui/Button";
import { Input } from "components/ui/Input";
import { Label } from "components/ui/Label";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useCreteCard } from "hooks/useCard";
import { useToast } from "hooks/useToast";
import { Link, useNavigate } from "react-router-dom";

import { FormSchemaCard, initialValuesCard } from "schemas/card";

export const NewProjectPage = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const { mutate, isLoading } = useCreteCard();
  const handleSubmit = (values) => {
    const isValidDate = dayjs(values.due).isValid();
    if (!isValidDate) showToast("Enter a valid date", "error");

    const due = dayjs(values.due).toISOString();
    const user = JSON.parse(localStorage.getItem("user"));
    const creator = user._id;
    const card = { name: values.name, due, creator };

    mutate(card, {
      onSuccess: () => {
        showToast("Project created successfully", "success");
        navigate("/");
      },
      onError: (error) => {
        showToast(error.response.data.msg, "error");
      },
    });
  };
  return (
    <div className="mx-auto mt-10 max-w-[600px] px-2">
      <div className="my-8 flex justify-end">
        <Link
          to="/auth/login"
          className="mt-2 block text-center text-sm font-semibold text-slate-700 underline transition-colors hover:text-sky-600"
        >
          Back to DashBoard
        </Link>
      </div>
      <div className="relative w-full rounded-lg border-2 border-slate-400 p-6">
        <div className="absolute -top-3.5 left-2 bg-stone-100 px-1.5">
          <h3 className="font-bold text-slate-600">Plan a new project</h3>
        </div>

        <div>
          <Formik
            initialValues={initialValuesCard}
            validationSchema={FormSchemaCard}
            onSubmit={handleSubmit}
          >
            {({ isValid }) => (
              <Form className="mt-3 space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <Label htmlFor="name" name="Project" isRequired />
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoFocus
                      placeholder="Ej. Talk AWS Course"
                      component={Input}
                    />
                    <ErrorMessage
                      className="mt-0.5 text-xs text-red-500 line-clamp-1"
                      name="name"
                      component="div"
                    />
                  </div>
                  <div>
                    <Label htmlFor="due" name="Due Date" isRequired />
                    <Field
                      type="datetime-local"
                      id="due"
                      name="due"
                      required
                      placeholder=""
                      component={Input}
                    />
                    <ErrorMessage
                      className="mt-0.5 text-xs text-red-500 line-clamp-1"
                      name="due"
                      component="div"
                    />
                  </div>
                  <div className="">
                    <Button
                      block
                      type="submit"
                      name="Plan Project"
                      loading={isLoading}
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
