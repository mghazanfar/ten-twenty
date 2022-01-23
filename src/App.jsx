import React, { Component } from "react";
import { Navbar } from "./components/navbar";
import { Horizontal } from "./sections/horizontal";
import { Main } from "./sections/main";
import { People } from "./sections/people";
import {
  peopleData,
  peopleDataWithBlueAvatars,
} from "./sections/people/people.data";

class App extends Component {
  render() {
    return (
      <div style={{ margin: 52 }}>
        <Navbar />
        <div style={{ margin: "41px 0px" }}>
          <Main />
        </div>
        <People peopleData={peopleData} />
        <Horizontal />
        <People peopleData={peopleDataWithBlueAvatars} noIndex={true} />
      </div>
    );
  }
}

export default App;
