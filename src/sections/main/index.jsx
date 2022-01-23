import React from "react";
import { ArticleCard } from "../../components/article-card";
import { data } from "./main.data";

export const Main = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "48%" }}>
        <ArticleCard
          variant={data[0].variant}
          title={data[0].title}
          img={data[0].img}
          header={data[0].header}
          subheader={data[0].subheader}
          author={data[0].author}
        />
      </div>
      <div style={{ width: "24%" }}>
        {data.slice(1, 4).map((card) => (
          <ArticleCard {...card} />
        ))}
      </div>
      <div style={{ width: "24%" }}>
        {data.slice(4, 8).map((card) => (
          <ArticleCard {...card} />
        ))}
      </div>
    </div>
  );
};
