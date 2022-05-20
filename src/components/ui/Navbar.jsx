import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ title, to, nameButton }) => {
  const navigate = useNavigate();
  return (
    <nav className="h-16 w-full bg-yellow-900">
      <div className="relative mx-auto flex h-full w-full max-w-[900px] items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        {to && (
          <div className="absolute right-4">
            <Button name={nameButton} onClick={() => navigate(to)} />
          </div>
        )}
      </div>
    </nav>
  );
};
