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
  horizontal,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: horizontal
          ? inverse
            ? "row-reverse"
            : "row"
          : inverse
          ? "column-reverse"
          : "column",
        alignItems: horizontal ? "center" : variant,
        "&:hover": {
          backgroundColor: "red",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: variant,
          flexDirection: "column",
        }}
      >
        {title && (
          <div>
            <Badge>{title}</Badge>
          </div>
        )}
        {header && (
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
        )}
        {subheader && (
          <PlayFair
            style={{
              fontWeight: 400,
              fontSize: 18,
              marginTop: header ? 0 : 10,
              textAlign: variant,
              width: variant === "center" ? "70%" : "100%",
            }}
          >
            {subheader}
          </PlayFair>
        )}
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
            marginRight: horizontal ? 40 : 0,
          }}
        />
      )}
    </div>
  );
};
