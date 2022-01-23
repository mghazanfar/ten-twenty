import React from "react";
import { ThemeContext } from "../../store/theme-context";
import { Divider } from "../divider";
import { menu, menuDark, night, nightDark, today } from "../svg";
import { Roboto } from "../typography";
import { useNavbarStyles } from "./styles";

const links = ["NEWS", "OPINION", "LIFE", "BUSINESS", "MAGAZINE", "NEWSLETTER"];

export const Navbar = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        const navbarStyles = useNavbarStyles(theme);
        return (
          <>
            <div style={navbarStyles.header}>
              <div style={navbarStyles.center}>
                <div>{theme.text === "black" ? menu : menuDark}</div>
                <Roboto style={navbarStyles.menu}>MENU</Roboto>
                <div
                  onClick={() => {
                    toggleTheme();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {theme.text === "black" ? night : nightDark}
                </div>
              </div>
              <div style={navbarStyles.title}>{today}</div>
            </div>
            <div style={navbarStyles.subheader}>
              <div style={navbarStyles.links}>
                {links.map((link) => (
                  <Roboto style={navbarStyles.bold}>{link}</Roboto>
                ))}
              </div>
            </div>
            <Divider />
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};
