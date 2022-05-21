import React from "react";

export const ListBody = ({ children }) => {
  return (
    <div className="h-[calc(100vh_-_224px)] w-full space-y-4 overflow-y-auto p-3">
      {children}
    </div>
  );
};
