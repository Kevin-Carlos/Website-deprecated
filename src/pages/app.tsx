import React, { FC } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { MenuLayoutRoute } from "common/routes";
import { Homepage } from "./home";
// import { ProjectsSection } from "./projects";
import { links } from "common/links";

type AppProps = {};


/**
 * High level routes here get wrapped by the MenuLayout.
 * Sub-routes will always be normal routes
 */
const App: FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Switch>

        <MenuLayoutRoute exact path={links.home()}>
          <Homepage />
        </MenuLayoutRoute>

        {/* <MenuLayoutRoute path={links.projects().root()}>
          <ProjectsSection />
        </MenuLayoutRoute> */}

      </Switch>
    </BrowserRouter>
  );
};

export default App;
