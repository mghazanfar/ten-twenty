import React from "react";
import { ThemeContext } from "../../store/theme-context";
import { Badge } from "../badge";
import { PlayFair, Roboto } from "../typography";
import { useArticleCardStyles } from "./styles";
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
    <ThemeContext.Consumer>
      {({ theme }) => {
        const styles = useArticleCardStyles(
          theme,
          horizontal,
          inverse,
          variant,
          disabled,
          header
        );
        return (
          <div style={styles.container}>
            {index && <Roboto style={styles.index}>{index}</Roboto>}
            <div style={styles.title}>
              {title && (
                <div>
                  <Badge disabled={disabled}>{title}</Badge>
                </div>
              )}
              {header && <PlayFair style={styles.header}>{header}</PlayFair>}
              {subheader && (
                <PlayFair style={styles.subheader}>{subheader}</PlayFair>
              )}
              <Roboto style={styles.author}>{author}</Roboto>
            </div>
            {img && (
              <img src={img} width={imgWidth || "100%"} style={styles.img} />
            )}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
