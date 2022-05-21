import React from "react";

export const ListBody = ({ children }) => {
  return (
    <div className="h-[calc(100vh_-_224px)] w-full overflow-y-auto">
      {children}
    </div>
  );
};
