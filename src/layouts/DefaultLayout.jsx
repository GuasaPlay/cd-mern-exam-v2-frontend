import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const DefaultLayout = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUser(JSON.parse(user));
  }, []);

  return (
    <main>
      <div className="mt-12">
        <div className="relative mx-auto max-w-[1100px] items-center px-2">
          <h1 className="text-center text-4xl font-bold text-slate-700 ">
            Project Manager
          </h1>
          <div className="absolute top-2 left-5">
            <h3 className="text-lg font-semibold text-slate-700">
              Hello, {user?.username}
            </h3>
          </div>
          <div className="absolute top-2 right-5">
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="font-semibold text-slate-700 underline hover:text-sky-600"
            >
              Sign Out
            </button>
          </div>
        </div>
        <Outlet />
      </div>
      <ToastContainer />
    </main>
  );
};
