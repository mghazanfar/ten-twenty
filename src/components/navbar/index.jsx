import React from "react";
import { day } from "../../theme.day";
import { Divider } from "../divider";
import { menu, night, today } from "../svg";
import { Roboto } from "../typography";

const links = ["NEWS", "OPINION", "LIFE", "BUSINESS", "MAGAZINE", "NEWSLETTER"];

export const Navbar = () => {
  let theme = day;
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "Roboto",
          paddingTop: 25,
          paddingLeft: 65,
          paddingBottom: 48,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Roboto style={{ fontWeight: 700 }}>{menu}</Roboto>
          <Roboto style={{ marginLeft: 13, marginRight: 22, fontWeight: 700 }}>
            MENU
          </Roboto>
          <div>{night}</div>
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 65,
            marginLeft: "-12%",
          }}
        >
          {today}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 30,
        }}
      >
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {links.map((link) => (
            <Roboto style={{ fontWeight: 700 }}>{link}</Roboto>
          ))}
        </div>
      </div>
      <Divider />
    </>
  );
};
