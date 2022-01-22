import React from "react";

export const Roboto = ({ children, style, ...rest }) => (
  <div style={{ fontFamily: "Roboto", ...style }} {...rest}>
    {children}
  </div>
);

export const PlayFair = ({ children, style, ...rest }) => (
  <div style={{ fontFamily: "Playfair Display", ...style }} {...rest}>
    {children}
  </div>
);
