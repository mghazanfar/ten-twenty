import React from "react";
import { Badge } from "../badge";
import { PlayFair, Roboto } from "../typography";

export const Person = ({ img, name, description, index }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Roboto
        style={{
          fontWeight: 500,
          fontSize: 18,
          color: "#7B7B7B",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        {index}
      </Roboto>
      <img src={img} />
      <div style={{ marginTop: 18, marginBottom: 18 }}>
        <Badge>{name}</Badge>
      </div>
      <PlayFair style={{ width: "70%", textAlign: "center" }}>
        {description}
      </PlayFair>
    </div>
  );
};
