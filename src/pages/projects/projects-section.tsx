import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { links } from "src/common/links";
import { ProjectDashboard } from "./dashboard/";
import { Flashcards } from "./dashboard/flashcards";

interface ProjectsSectionProps { };

export const ProjectsSection: FC<ProjectsSectionProps> = () => {
  return (
    <Switch>

      <Route
        exact
        path={links.projects().project().flashcards()}
      >
        <Flashcards />
      </Route>

      <Route
        path={links.projects().root()}
      >
        <ProjectDashboard />
      </Route>

    </Switch>
  )
}