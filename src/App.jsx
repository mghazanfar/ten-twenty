import React, { Component } from "react";
import { Navbar } from "./components/navbar";
import { Main } from "./sections/main";
import { People } from "./sections/people";

class App extends Component {
  render() {
    return (
      <div style={{ margin: 52 }}>
        <Navbar />
        <div style={{ margin: "41px 0px" }}>
          <Main />
        </div>
        <People />
      </div>
    );
  }
}

export default App;
