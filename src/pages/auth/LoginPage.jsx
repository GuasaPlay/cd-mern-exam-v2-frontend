import { Button } from "components/ui/Button";
import { Input } from "components/ui/Input";
import { Label } from "components/ui/Label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useToast } from "hooks/useToast";
import { useLoginUser } from "hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { FormSchemaLogin, initialValuesLogin } from "schemas/login";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { mutate } = useLoginUser();

  const handleSubmit = (values) => {
    const user = {
      email: values.email,
      password: values.password,
    };

    mutate(user, {
      onSuccess: (data) => {
        const { accessToken } = data;
        localStorage.setItem("accessToken", accessToken);
        navigate("/", { replace: true });
      },
      onError: (error) => {
        showToast(error.response.data.msg, "error");
      },
    });
  };

  return (
    <div className="mt-3 border-t pt-3">
      <h3 className="text-center text-lg font-semibold text-slate-700">
        Sign In
      </h3>
      <Formik
        initialValues={initialValuesLogin}
        validationSchema={FormSchemaLogin}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className="mt-3 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <Label htmlFor="email" name="Email" isRequired />
                <Field
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoFocus
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

              <div className="mt-6 w-full">
                <Button type="submit" name="Login" block />
                <Link
                  to="/auth/register"
                  className="mt-2 block text-center text-sm text-slate-600 underline transition-colors hover:text-blue-500"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
