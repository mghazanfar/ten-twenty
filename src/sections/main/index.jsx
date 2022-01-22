import React from "react";
import { ArticleCard } from "../../components/article-card";

export const Main = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "48%" }}>
        <ArticleCard variant="center" />
      </div>
      <div style={{ width: "24%" }}>
        <ArticleCard variant="center" />
        <ArticleCard variant="center" />
      </div>
      <div style={{ width: "24%" }}>
        <ArticleCard variant="center" />
        <ArticleCard variant="center" />
      </div>
    </div>
  );
};
