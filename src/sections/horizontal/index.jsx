import React from "react";
import { ArticleCard } from "../../components/article-card";
import { SectionDivider } from "../../components/section-divider";
import { horizontalData } from "./horizontal.data";
import { useStyles } from "./style";

export const Horizontal = () => {
  return (
    <div>
      <SectionDivider color="#F0C0C1" text="2 rows: 1 x 3" />
      <div style={useStyles.header}>
        <div>
          <ArticleCard {...horizontalData[0]} />
        </div>
        <div style={useStyles.container}>
          {horizontalData.slice(1, 5).map((data) => (
            <div style={useStyles.item}>
              <ArticleCard {...data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
