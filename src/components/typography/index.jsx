import React from "react";
import { ThemeContext } from "../../store/theme-context";

export const Roboto = ({ children, style, ...rest }) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <div
        style={{ fontFamily: "Roboto", color: theme.text, ...style }}
        {...rest}
      >
        {children}
      </div>
    )}
  </ThemeContext.Consumer>
);

export const PlayFair = ({ children, style, ...rest }) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <div
        style={{ fontFamily: "Playfair Display", color: theme.text, ...style }}
        {...rest}
      >
        {children}
      </div>
    )}
  </ThemeContext.Consumer>
);
