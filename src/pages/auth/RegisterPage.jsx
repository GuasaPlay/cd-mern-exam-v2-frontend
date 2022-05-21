import axios from "axios";
import { Button } from "components/ui/Button";
import { Input } from "components/ui/Input";
import { Label } from "components/ui/Label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useToast } from "hooks/useToast";
import { useRegisterUser } from "hooks/useUser";
import { Link } from "react-router-dom";
import { FormSchemaRegister, initialValuesRegister } from "schemas/register";

export const RegisterPage = ({ setLoggedIn }) => {
  const { showToast } = useToast();
  const { mutate } = useRegisterUser();
  const handleSubmit = (values) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    mutate(user, {
      onSuccess: (data) => {
        const { accessToken, user } = data;

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        setLoggedIn(true);
      },
      onError: (error) => {
        showToast(error.response.data.msg, "error");
      },
    });
  };

  return (
    <div className="mt-3 border-t pt-3">
      <h3 className="text-center text-lg font-semibold text-slate-700">
        Sign Up
      </h3>
      <Formik
        initialValues={initialValuesRegister}
        validationSchema={FormSchemaRegister}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className="mt-3 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <Label htmlFor="name" name="Name" isRequired />
                <Field
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoFocus
                  placeholder="Ej. John Doe"
                  component={Input}
                />
                <ErrorMessage
                  className="mt-0.5 text-xs text-red-500 line-clamp-1"
                  name="name"
                  component="div"
                />
              </div>
              <div>
                <Label htmlFor="email" name="Email" isRequired />
                <Field
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Ej. john@gmail.com"
                  component={Input}
                />
                <ErrorMessage
                  className="mt-0.5 text-xs text-red-500 line-clamp-1"
                  name="email"
                  component="div"
                />
              </div>
              <div>
                <Label htmlFor="password" name="Password" isRequired />
                <Field
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Ej. *******"
                  component={Input}
                />
                <ErrorMessage
                  className="mt-0.5 text-xs text-red-500 line-clamp-1"
                  name="password"
                  component="div"
                />
              </div>
              <div>
                <Label
                  htmlFor="confirmPassword"
                  name="Confirm password"
                  isRequired
                />
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  placeholder="Ej. *******"
                  component={Input}
                />
                <ErrorMessage
                  className="mt-0.5 text-xs text-red-500 line-clamp-1"
                  name="confirmPassword"
                  component="div"
                />
              </div>

              <div className="mt-6 w-full">
                <Button type="submit" name="Register" block />
                <Link
                  to="/auth/login"
                  className="mt-2 block text-center text-sm text-slate-600 underline transition-colors hover:text-blue-500"
                >
                  Already have an account?
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
