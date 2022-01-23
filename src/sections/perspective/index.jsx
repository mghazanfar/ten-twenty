import React from "react";
import { ArticleCard } from "../../components/article-card";
import { SectionDivider } from "../../components/section-divider";
import Glass from "../../assets/glass.png";

export const Perspective = () => {
  return (
    <div>
      <SectionDivider text="1 row: 2 stories with bg" color={"#F0C0C1"} />
      <div
        style={{
          marginTop: 40,
          marginBottom: 40,
          backgroundColor: "#F8F1E8",
          padding: "49px 110px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "32%" }}>
          <ArticleCard
            title={"HALF FULL"}
            header={
              "Louvre Abu Dhabi marks 4th anniversary with world class exhibition Louvre Abu Dhabi marks 4th"
            }
            subheader={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."
            }
            variant="center"
          />
        </div>
        <div style={{ width: "32%" }}>
          <ArticleCard
            title={"ONE STORY, TWO PERSPECTIVES"}
            img={Glass}
            variant="center"
          />
        </div>
        <div style={{ width: "32%" }}>
          <ArticleCard
            title={"HALF EMPTY"}
            variant="center"
            header={
              "Louvre Abu Dhabi marks 4th anniversary with world class exhibition Louvre Abu Dhabi marks 4th"
            }
            subheader={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."
            }
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
};
