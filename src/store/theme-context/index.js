import React from "react";

export const themes = {
  light: {
    text:"black",
    background: "white",
    peopleBg: '#F8F1E8'
  },
  dark: {
    text:"white",
    background: "#3D3D3D",
    peopleBg: '#434241'
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});
