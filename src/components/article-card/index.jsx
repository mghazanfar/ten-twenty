import React from "react";
import { Badge } from "../badge";
import { PlayFair } from "../typography";

export const ArticleCard = ({ variant }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: variant }}
    >
      <div>
        <Badge>TRAVEL</Badge>
      </div>
      <PlayFair
        style={{
          fontWeight: 500,
          fontSize: 28,
          textAlign: variant,
          marginTop: 20,
          marginBottom: 25,
        }}
      >
        Louvre Abu Dhabi marks 4th anniversary with world class exhibitions,
        programming for all
      </PlayFair>
      <PlayFair style={{ fontWeight: 400, fontSize: 18, textAlign: variant }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
        odio vel risus dignissim interdum.
      </PlayFair>
      <img
        src="https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        width={"100%"}
        style={{ marginTop: 24 }}
      />
    </div>
  );
};
