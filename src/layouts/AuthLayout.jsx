import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <main className="h-screen w-screen">
      <div className="flex h-full w-full items-center justify-center p-4">
        <div className="w-full rounded-lg bg-white p-4 sm:w-1/2 md:w-2/6">
          <h1 className="text-center text-2xl font-semibold text-slate-700">
            Coding Dojo
          </h1>
          <Outlet />
        </div>
      </div>
    </main>
  );
};
