import React from "react";
import { Badge } from "../badge";
import { PlayFair } from "../typography";

export const Person = ({ img, name, description }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
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
