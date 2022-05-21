export const Board = ({ children }) => {
  return (
    <div className="mt-4 flex h-[calc(100vh_-_170px)] w-full divide-x-2 divide-slate-400 overflow-hidden rounded-t-lg border-2 border-slate-400">
      {children}
    </div>
  );
};
