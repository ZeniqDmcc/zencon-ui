import React from "react";

export default function Container({ children }) {
  return (
    <div className="sm:w-10/12 w-full sm:px-0 px-4 py-2 mx-auto">{children}</div>
  );
}
