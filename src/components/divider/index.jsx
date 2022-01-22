import React from "react";
import { day } from "../../theme.day";

export const Divider = () => {
  const theme = day;
  return <div style={{ borderBottom: `3px dashed ${theme.secondary}` }} />;
};
