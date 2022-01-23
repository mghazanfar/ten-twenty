import React from "react";
import { ArticleCard } from "../../components/article-card";
import { Divider } from "../../components/divider";
import { Roboto } from "../../components/typography";
import { horizontalData } from "./horizontal.data";

export const Horizontal = () => {
  return (
    <div>
      <Divider />
      <Roboto
        style={{
          color: "#F0C0C1",
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
      <div style={{ marginTop: 40, marginBottom: 40 }}>
        <div>
          <ArticleCard {...horizontalData[0]} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          {horizontalData.slice(1, 5).map((data) => (
            <div style={{ width: "30%" }}>
              <ArticleCard {...data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
