const buttonColor = {
  primary: "bg-blue-600",
  delete: "bg-red-600",
};

export const Button = ({
  type = "button",
  name,
  bg = "primary",
  loading,
  disabled,
  onClick,
  block,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={loading || disabled}
      className={`rounded-md py-2 px-3 text-sm font-semibold leading-normal text-white shadow shadow-slate-500 transition-all hover:shadow-lg hover:shadow-slate-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 ${
        buttonColor[bg]
      } ${block ? "w-full" : ""}`}
    >
      {loading ? "Cargando..." : name}
    </button>
  );
};
