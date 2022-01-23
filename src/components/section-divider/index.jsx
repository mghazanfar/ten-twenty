import React from "react";
import { Divider } from "../divider";
import { Roboto } from "../typography";

export const SectionDivider = ({ color, text }) => {
  return (
    <>
      <Divider />
      <Roboto
        style={{
          color: color,
          fontWeight: 900,
          fontSize: 40,
          textTransform: "uppercase",
          textAlign: "center",
          padding: 15,
        }}
      >
        {text}
      </Roboto>
      <Divider />
    </>
  );
};
