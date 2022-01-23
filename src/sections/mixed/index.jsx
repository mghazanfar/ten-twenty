import React from "react";
import { ArticleCard } from "../../components/article-card";
import { SectionDivider } from "../../components/section-divider";
import Car from "../../assets/blue-car.png";
import Dinner from "../../assets/dinner.png";
import View from "../../assets/view.png";

export const Mixed = () => {
  return (
    <div>
      <SectionDivider color={"#EDC47F"} text={"1 row: 2 x 1 inverted"} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 40,
          marginBottom: 40,
        }}
      >
        <div style={{ width: "32%" }}>
          <ArticleCard
            title={"OPEN HOUSE"}
            author={"U. R. Oliver"}
            subheader={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."
            }
            img={Car}
            variant="center"
            inverse={true}
          />
        </div>
        <div style={{ width: "32%" }}>
          <ArticleCard
            title={"OPEN HOUSE"}
            author={"U. R. Oliver"}
            subheader={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."
            }
            img={Dinner}
            variant="center"
          />
        </div>
        <div style={{ width: "32%" }}>
          <ArticleCard
            title={"OPEN HOUSE"}
            author={"U. R. Oliver"}
            subheader={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."
            }
            img={View}
            variant="center"
            inverse={true}
          />
        </div>
      </div>
    </div>
  );
};
