import React from "react";
import { ArticleCard } from "../../components/article-card";
import { Person } from "../../components/person";
import { SectionDivider } from "../../components/section-divider";

export const People = ({ peopleData, noIndex }) => {
  return (
    <div>
      <SectionDivider color="#EDC47F" text="1 row: 5 circles with bg" />
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
          <div style={{ width: peopleData.length === 4 ? "23%" : "25%" }}>
            <ArticleCard {...person} index={noIndex ? "" : i + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};
