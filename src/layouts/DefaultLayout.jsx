import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const DefaultLayout = () => {
  return (
    <main>
      <div className="mt-12">
        <h1 className="text-center text-4xl font-bold text-slate-700 ">
          Project Manager
        </h1>
        <Outlet />
      </div>
      <ToastContainer />
    </main>
  );
};
