import React from "react";
import { ArticleCard } from "../../components/article-card";
import { SectionDivider } from "../../components/section-divider";
import { recipes } from "../people/people.data";
import { styles } from "./styles";

export const Recipes = () => {
  return (
    <div>
      <SectionDivider color="#DD6849" text={"2 rows: 3 x 3"} />
      <div style={styles.container}>
        {recipes.map((recipe) => (
          <div style={styles.item}>
            <ArticleCard {...recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};
