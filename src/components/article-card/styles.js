export const useArticleCardStyles = (theme,
    horizontal,
    inverse,
    variant,
    disabled,header) => {
        
    return {
        container:{
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
            color: theme.text
          },
          index:{
            fontWeight: 500,
            fontSize: 18,
            color: "#7B7B7B",
            position: "absolute",
            left: 0,
            top: 0,
          },
          title:{
            display: "flex",
            alignItems: variant,
            flexDirection: "column",
          },
          header:{
            fontWeight: 500,
            fontSize: 28,
            textAlign: variant,
            marginTop: 20,
            marginBottom: 25,
            width: variant === "center" ? "70%" : "100%",
            color: disabled ? "#dddddd" : theme.text,
          },
          subheader:{
            fontWeight: 400,
            fontSize: 18,
            marginTop: header ? 0 : 10,
            textAlign: variant,
            width: variant === "center" ? "70%" : "100%",
            color: disabled ? "#dddddd" : theme.text,
          },
          author:{
            fontWeight: 500,
            fontSize: 12,
            marginTop: 21,
            marginBottom: horizontal ? 15 : 24,
            color: disabled ? "#dddddd" : theme.text,
          },
          img:{
            marginBottom: 24,
            marginRight: horizontal ? 40 : 0,
          }
    }
}