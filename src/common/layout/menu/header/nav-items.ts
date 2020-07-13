import { links } from "src/common/links";

type NavItems = {
  name: string;
  path: string;
};

export const menuItems: NavItems[] = [
  {
    name: "LinkedIn",
    path: links.linkedIn(),
  },
  {
    name: "Projects",
    path: links.projects().root(),
  },
]