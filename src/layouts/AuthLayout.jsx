import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <main className="h-screen w-screen">
      <div className="flex h-full w-full items-center justify-center ">
        <div className="w-2/6 rounded-lg bg-white p-4">
          <h1 className="text-center text-xl font-semibold text-slate-700">
            Coding Dojo
          </h1>
          <Outlet />
        </div>
      </div>
    </main>
  );
};
