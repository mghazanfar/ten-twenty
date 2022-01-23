import React from "react";
import { ArticleCard } from "../../components/article-card";
import { SectionDivider } from "../../components/section-divider";
import { recipes } from "../people/people.data";

export const Recipes = () => {
  return (
    <div>
      <SectionDivider color="#DD6849" text={"2 rows: 3 x 3"} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: 40,
          marginBottom: 40,
        }}
      >
        {recipes.map((recipe) => (
          <div style={{ width: "32%", marginBottom: 44 }}>
            <ArticleCard {...recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};
