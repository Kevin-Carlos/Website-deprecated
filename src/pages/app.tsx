import React, { FC, useState } from "react";
import { Switch } from "react-router-dom";
import { MenuLayoutRoute } from "common/routes";
import { links } from "common/links";

// Components
import { ProjectsSection } from "./projects";
import { Homepage } from "./home";
import { MenuContext } from "common/layout";
import type { Visibility } from "common/types";

type AppProps = {};


/**
 * High level routes here get wrapped by the MenuLayout.
 * Sub-routes will always be normal routes
 */
const App: FC<AppProps> = () => {
  const [hideFooterItems, setFooterItemVisibility] = useState<Visibility>("hide");

  return (
    <MenuContext.Provider value={{ hideFooterItems, setFooterItemVisibility }}>
      <Switch>

        <MenuLayoutRoute path={links.projects().root()}>
          <ProjectsSection />
        </MenuLayoutRoute>

        <MenuLayoutRoute path={links.home()}>
          <Homepage />
        </MenuLayoutRoute>

      </Switch>

    </MenuContext.Provider>
  );
};

export default App;
