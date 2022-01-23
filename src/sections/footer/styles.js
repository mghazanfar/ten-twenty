export const useFooterStyles = theme => {
    return {
        container:{ marginTop: 62 },
        flex:{ display: "flex" },
        list:{ marginLeft: 100, marginRight: 100 },
        subscribe:{
            marginRight: 100,
            marginLeft: "auto",
            color: theme.text,
          },
          title:{ marginBottom: 19, marginTop: 17 },
          email:{
            backgroundColor: theme.peopleBg,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 8,
          },
          submit:{
            backgroundColor: "#F2F2EA",
            padding: "12px 24px",
            color: "black",
          },
          links:{
            marginTop: 45,
            marginBottom: 32,
            display: "flex",
            justifyContent: "space-around",
            fontWeight: 700,
            color: theme.text,
          }
    }
}