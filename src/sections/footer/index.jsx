import React from "react";
import { Divider } from "../../components/divider";
import { Roboto } from "../../components/typography";
import { ThemeContext } from "../../store/theme-context";
import { useFooterStyles } from "./styles";

const List = ({ title, list }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div>
          <Roboto style={{ marginTop: 10 }}>
            <b style={{ textTransform: "uppercase", color: theme.text }}>
              {title}
            </b>
          </Roboto>
          <Roboto>
            {list.map((item) => (
              <Roboto style={{ marginTop: 8, color: theme.text }}>
                {item}
              </Roboto>
            ))}
          </Roboto>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export const Footer = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const styles = useFooterStyles(theme);
        return (
          <div style={styles.container}>
            <div style={styles.flex}>
              <List title="News" list={["Featured News", "Latest News"]} />

              <div style={styles.list}>
                <List
                  title="Life"
                  list={[
                    "Latest News",
                    "Fashion",
                    "Dining",
                    "Recipes",
                    "Art & Culture",
                    "Travel",
                    "Motoring",
                  ]}
                />
              </div>
              <List
                title="Business"
                list={[
                  "Open house",
                  "What does that even mean?",
                  "Homegrown",
                  "How do I do...",
                  "Bag off",
                  "Where to spend it",
                ]}
              />
              <div style={styles.subscribe}>
                <Roboto>SUBSCRIBE</Roboto>
                <Roboto style={styles.title}>
                  Get fresh updates about the fashion, beauty, trends
                </Roboto>
                <Roboto style={styles.email}>
                  <div>Enter your email below</div>
                  <div style={styles.submit}>Submit</div>
                </Roboto>
              </div>
            </div>
            <div style={styles.links}>
              <Roboto>MAGAZINE</Roboto>
              <Roboto>CONTACT</Roboto>
              <Roboto>ABOUT</Roboto>
              <Roboto>PRESS</Roboto>
              <Roboto>TS + CS</Roboto>
            </div>
            <Divider />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
