import React from "react";

export const themes = {
  light: {
    text:"black",
    background: "white",
  },
  dark: {
    text:"white",
    background: "#3D3D3D",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});
