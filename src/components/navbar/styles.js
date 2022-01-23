export const useNavbarStyles = (theme) => {
  return {
    header: {
      display: "flex",
      alignItems: "center",
      fontFamily: "Roboto",
      paddingTop: 25,
      paddingLeft: 65,
      paddingBottom: 48,
      color: theme.text,
      svg: {
        path: {
          fill: `${theme.text} !important`,
        },
      },
      line: {
        stroke: `${theme.text} !important`,
      },
    },
    center: { display: "flex", alignItems: "center", zIndex: 200 },
    menu: { marginLeft: 13, marginRight: 22, fontWeight: 700 },
    title: {
      flex: 1,
      textAlign: "center",
      fontSize: 65,
      marginLeft: "-12%",
    },
    subheader: {
      display: "flex",
      justifyContent: "center",
      paddingBottom: 30,
      color: theme.text,
    },
    links: {
      width: "60%",
      display: "flex",
      justifyContent: "space-between",
    },
    bold: {
      fontWeight: 700,
    },
  };
};
