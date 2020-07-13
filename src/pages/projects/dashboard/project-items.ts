import { links } from "src/common/links";

interface Items {
  name: string;
  description: string;
  path: string;
};

export const projectItems: Items[] = [
  {
    name: "Flashcards",
    description:
      `
        This project was built to demonstrate my ability to quickly learn a MERN stack and Redux.
        The original can be seen at "https://github.com/Kevin-Carlos/ReactFlashcards".
        It is being updated to run within this site and using "Recoiljs".
      `,
    path: links.projects().project().flashcards()
  }
]