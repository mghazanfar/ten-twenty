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
  index,
  imgWidth,
  disabled,
}) => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
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
      {index && (
        <Roboto
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: "#7B7B7B",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        >
          {index}
        </Roboto>
      )}
      <div
        style={{
          display: "flex",
          alignItems: variant,
          flexDirection: "column",
        }}
      >
        {title && (
          <div>
            <Badge disabled={disabled}>{title}</Badge>
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
              color: disabled ? "#dddddd" : "black",
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
              color: disabled ? "#dddddd" : "black",
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
            marginBottom: horizontal ? 15 : 24,
            color: disabled ? "#dddddd" : "black",
          }}
        >
          {author}
        </Roboto>
      </div>
      {img && (
        <img
          src={img}
          width={imgWidth || "100%"}
          style={{
            marginBottom: 24,
            marginRight: horizontal ? 40 : 0,
          }}
        />
      )}
    </div>
  );
};
