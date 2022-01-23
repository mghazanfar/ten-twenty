import React from "react";
import { ArticleCard } from "../../components/article-card";
import { SectionDivider } from "../../components/section-divider";
import Glass from "../../assets/glass.png";
import { ThemeContext } from "../../store/theme-context";
import { useStyles } from "./styles";

export const Perspective = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const styles = useStyles(theme);
        return (
          <>
            <SectionDivider text="1 row: 2 stories with bg" color={"#F0C0C1"} />
            <div style={styles.container}>
              <div style={styles.item}>
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
              <div style={styles.item}>
                <ArticleCard
                  title={"ONE STORY, TWO PERSPECTIVES"}
                  img={Glass}
                  variant="center"
                />
              </div>
              <div style={styles.item}>
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
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};
