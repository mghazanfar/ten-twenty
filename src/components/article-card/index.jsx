import React from "react";
import { Badge } from "../badge";
import { PlayFair, Roboto } from "../typography";
export const ArticleCard = ({
  variant = "flex-start",
  title,
  header,
  subheader,
  author,
  img,
  inverse,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: inverse ? "column-reverse" : "column",
        alignItems: variant,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: variant,
          flexDirection: "column",
        }}
      >
        <div>
          <Badge>{title}</Badge>
        </div>
        <PlayFair
          style={{
            fontWeight: 500,
            fontSize: 28,
            textAlign: variant,
            marginTop: 20,
            marginBottom: 25,
            width: variant === "center" ? "70%" : "100%",
          }}
        >
          {header}
        </PlayFair>
        <PlayFair
          style={{
            fontWeight: 400,
            fontSize: 18,
            textAlign: variant,
            width: variant === "center" ? "70%" : "100%",
          }}
        >
          {subheader}
        </PlayFair>
        <Roboto
          style={{
            fontWeight: 500,
            fontSize: 12,
            marginTop: 21,
            marginBottom: 24,
          }}
        >
          {author}
        </Roboto>
      </div>
      {img && (
        <img
          src={img}
          width={"100%"}
          style={{
            marginBottom: 24,
          }}
        />
      )}
    </div>
  );
};
