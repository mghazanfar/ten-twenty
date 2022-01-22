import React, { Component } from "react";
import { Navbar } from "./components/navbar";
import { Main } from "./sections/main";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ margin: "41px 0px" }}>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
