import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { links } from "common/links";
import { ProjectDashboard } from "./dashboard";
import { Flashcards } from "./flashcards";

type ProjectsSectionProps = {};

export const ProjectsSection: FC<ProjectsSectionProps> = () => {
  return (
    <Switch>

      <Route
        path={links.projects().project().flashcards()}
      >
        <Flashcards />
      </Route>

      <Route
        exact
        path={links.projects().root()}
      >
        <ProjectDashboard />
      </Route>

    </Switch>
  )
}