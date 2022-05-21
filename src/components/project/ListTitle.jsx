const titleColor = {
  sky: "bg-sky-200",
  yellow: "bg-yellow-200",
  green: "bg-green-200",
};

export const ListTitle = ({ title, color }) => {
  return (
    <div
      className={`border-b-2 border-slate-400 py-2 text-center ${titleColor[color]}`}
    >
      <h3 className="text-2xl font-semibold text-slate-700" title={title}>
        {title}
      </h3>
    </div>
  );
};
