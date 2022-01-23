import React, { Component } from "react";
import { Divider } from "./components/divider";
import { Navbar } from "./components/navbar";
import { Footer } from "./sections/footer";
import { FullWidth } from "./sections/fullwidth";
import { Horizontal } from "./sections/horizontal";
import { Main } from "./sections/main";
import { Mixed } from "./sections/mixed";
import { People } from "./sections/people";
import {
  peopleData,
  peopleDataWithBlueAvatars,
  reviews,
  videos,
} from "./sections/people/people.data";
import { Perspective } from "./sections/perspective";
import { Recipes } from "./sections/recipes";

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
        <FullWidth />
        <Mixed />
        <Perspective />
        <People peopleData={reviews} noIndex={true} />
        <Recipes />
        <People peopleData={videos} noIndex={true} videos={true} />
        <Divider />
        <Footer />
      </div>
    );
  }
}

export default App;
