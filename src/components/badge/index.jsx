import React from "react";

const badgeStyle = {
  container: {
    backgroundColor: "black",
    color: "white",
    padding: "5px 14px",
    display: "inline",
    textTransform: "uppercase",
  },
  disabled: {
    backgroundColor: "white",
    color: "black",
    padding: "5px 14px",
    display: "inline",
    border: "1px solid black",
    textTransform: "uppercase",
  },
};

export const Badge = ({ children, disabled }) => {
  return (
    <div style={disabled ? badgeStyle.disabled : badgeStyle.container}>
      {children}
    </div>
  );
};
