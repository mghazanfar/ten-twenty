import React from "react";
import { Divider } from "../../components/divider";
import { Roboto } from "../../components/typography";
import { Recipes } from "../recipes";

const List = ({ title, list }) => {
  return (
    <div>
      <Roboto style={{ marginTop: 10 }}>
        <b style={{ textTransform: "uppercase" }}>{title}</b>
      </Roboto>
      <Roboto>
        {list.map((item) => (
          <Roboto style={{ marginTop: 8 }}>{item}</Roboto>
        ))}
      </Roboto>
    </div>
  );
};

export const Footer = () => {
  return (
    <div style={{ marginTop: 62 }}>
      <div style={{ display: "flex" }}>
        <List title="News" list={["Featured News", "Latest News"]} />

        <div style={{ marginLeft: 100, marginRight: 100 }}>
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
        <div style={{ marginRight: 100, marginLeft: "auto" }}>
          <Roboto>SUBSCRIBE</Roboto>
          <Roboto style={{ marginBottom: 19, marginTop: 17 }}>
            Get fresh updates about the fashion, beauty, trends
          </Roboto>
          <Roboto
            style={{
              backgroundColor: "#F8F1E8",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <div>Enter your email below</div>
            <div style={{ backgroundColor: "#F2F2EA", padding: "12px 24px" }}>
              Submit
            </div>
          </Roboto>
        </div>
      </div>
      <div
        style={{
          marginTop: 45,
          marginBottom: 32,
          display: "flex",
          justifyContent: "space-around",
          fontWeight: 700,
        }}
      >
        <Roboto>MAGAZINE</Roboto>
        <Roboto>CONTACT</Roboto>
        <Roboto>ABOUT</Roboto>
        <Roboto>PRESS</Roboto>
        <Roboto>TS + CS</Roboto>
      </div>
      <Divider />
    </div>
  );
};
