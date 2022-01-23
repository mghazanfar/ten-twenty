import React, { useState } from "react";
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
import { ThemeContext, themes } from "./store/theme-context";

const useStyles = (theme) => {
  return {
    containerOuter: { backgroundColor: theme.background },
    containerInner: { padding: 52 },
    main: { margin: "41px 0px" },
  };
};

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const styles = useStyles(theme);
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  return (
    <div style={styles.containerOuter}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div style={styles.containerInner}>
          <Navbar />
          <div style={styles.main}>
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
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
