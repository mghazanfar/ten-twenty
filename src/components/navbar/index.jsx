import React from "react";
import { ThemeContext } from "../../store/theme-context";
import { day } from "../../theme.day";
import { Divider } from "../divider";
import { menu, night, today } from "../svg";
import { Roboto } from "../typography";
import { navbarStyles } from "./styles";

const links = ["NEWS", "OPINION", "LIFE", "BUSINESS", "MAGAZINE", "NEWSLETTER"];

export const Navbar = () => {
  return (
    <>
      <div style={navbarStyles.header}>
        <div style={navbarStyles.center}>
          <div>{menu}</div>
          <Roboto style={navbarStyles.menu}>MENU</Roboto>
          <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
              <div
                onClick={() => {
                  debugger;
                  toggleTheme();
                }}
                style={{ cursor: "pointer" }}
              >
                {night}
              </div>
            )}
          </ThemeContext.Consumer>
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
};
