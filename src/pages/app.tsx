import React, { FC } from "react";
import { Switch } from "react-router-dom";
import { MenuLayoutRoute } from "common/routes";
import { links } from "common/links";

// Components
import { ProjectsSection } from "./projects";
import { Homepage } from "./home";

type AppProps = {};

// type LocationT = {
//   id: string;
//   component: React.ReactElement;
//   path: string;
//   isExact?: boolean;
// };

// const locations: LocationT[] = [
//   {
//     id: "homepage",
//     isExact: true,
//     path: links.home(),
//     component: <Homepage />,
//   },
//   {
//     id: "project-dashboard",
//     path: links.projects().root(),
//     component: <ProjectsSection />,
//   }
// ];


/**
 * High level routes here get wrapped by the MenuLayout.
 * Sub-routes will always be normal routes
 */
const App: FC<AppProps> = () => {
  // const location = useLocation();


  // const routeTransitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0, transform: "translateX(-10rem)" },
  //   enter: { opacity: 1, transform: "translateX(0)" }
  // });

  return (
    <>
      <Switch>

        <MenuLayoutRoute path={links.projects().root()}>
          <ProjectsSection />
        </MenuLayoutRoute>

        <MenuLayoutRoute path={links.home()}>
          <Homepage />
        </MenuLayoutRoute>

      </Switch>

    </>
  );
};

export default App;
