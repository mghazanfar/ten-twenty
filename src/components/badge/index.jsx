import React from "react";

const badgeStyle = {
  container: {
    backgroundColor: "black",
    color: "white",
    padding: "5px 14px",
    display: "inline",
  },
};

export const Badge = ({ children }) => {
  return <div style={badgeStyle.container}>{children}</div>;
};
