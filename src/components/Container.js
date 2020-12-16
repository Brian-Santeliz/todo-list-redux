import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};
