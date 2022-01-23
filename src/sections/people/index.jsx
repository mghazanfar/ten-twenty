import React from "react";
import { Divider } from "../../components/divider";
import { Person } from "../../components/person";
import { Roboto } from "../../components/typography";
import { peopleData } from "./people.data";

export const People = () => {
  return (
    <div>
      <Divider />
      <Roboto
        style={{
          color: "#EDC47F",
          fontWeight: 900,
          fontSize: 40,
          textTransform: "uppercase",
          textAlign: "center",
          padding: 15,
        }}
      >
        1 row: 5 circles with bg
      </Roboto>
      <Divider />
      <div
        style={{
          marginTop: 40,
          marginBottom: 40,
          padding: "56px 103px",
          backgroundColor: "#F8F1E8",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {peopleData.map((person, i) => (
          <Person {...person} index={i + 1} />
        ))}
      </div>
    </div>
  );
};
