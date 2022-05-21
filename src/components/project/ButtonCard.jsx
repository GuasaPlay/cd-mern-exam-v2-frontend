const buttonColor = {
  primary: "bg-sky-600",
  warning: "bg-yellow-200",
  success: "bg-green-200",
  delete: "bg-red-200",
};

export const ButtonCard = ({
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
      className={`relative rounded-md py-1.5 px-3 text-sm font-semibold leading-normal text-slate-700 shadow-md transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 ${
        buttonColor[bg]
      } ${block ? "w-full" : ""}`}
    >
      {name}
      {bg === "delete" && (
        <div className="absolute top-1.5 left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
      {bg !== "delete" && (
        <div className="absolute top-1.5 right-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
    </button>
  );
};
