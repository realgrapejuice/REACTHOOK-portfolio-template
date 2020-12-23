import styles from "./app.module.css";
import Nav from "./components/nav/nav";
import React, { useState } from "react";
import Photographer from "./components/photographer/photographer";
import Writer from "./components/writer/writer";
import Actor from "./components/actor/actor";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Story from "./components/story/story";

const App = (props) => {
  const [status, setStatus] = useState(true);

  const handleStatus = () => {
    if (!status) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <div className={styles.mainContainer}>
            <Nav onNavClick={handleStatus} status={status} />
            <Photographer onMenuClick={handleStatus} />
            <Writer onMenuClick={handleStatus} />
            <Actor onMenuClick={handleStatus} />
          </div>
        </Route>
        <Route path="/story">
          <Story />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
