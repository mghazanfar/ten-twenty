import React from "react";
import { ArticleCard } from "../../components/article-card";
import { Divider } from "../../components/divider";
import { SectionDivider } from "../../components/section-divider";
import { Roboto } from "../../components/typography";
import { horizontalData } from "./horizontal.data";

export const Horizontal = () => {
  return (
    <div>
      <SectionDivider color="#F0C0C1" text="2 rows: 1 x 3" />
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
