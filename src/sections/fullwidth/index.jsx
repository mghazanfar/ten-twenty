import React from "react";
import { ArticleCard } from "../../components/article-card";
import { SectionDivider } from "../../components/section-divider";
import LongRead from "../../assets/long-read.png";

export const FullWidth = () => {
  return (
    <div style={{ marginBottom: 40 }}>
      <SectionDivider color="#DD6849" text={"1 full width article"} />
      <ArticleCard img={LongRead} />
    </div>
  );
};
