import React from "react";
import { ArticleCard } from "../../components/article-card";
import { SectionDivider } from "../../components/section-divider";
import { ThemeContext } from "../../store/theme-context";
import { useStyles } from "./style";

export const People = ({ peopleData, noIndex, videos }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <div>
            <SectionDivider color="#EDC47F" text="1 row: 5 circles with bg" />
            <div
              style={{
                ...useStyles.container,
                backgroundColor: videos ? "transparent" : theme.peopleBg,
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
      }}
    </ThemeContext.Consumer>
  );
};
