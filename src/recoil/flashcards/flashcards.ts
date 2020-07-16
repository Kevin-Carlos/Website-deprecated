import Recoil from "recoil"; // ! fix import of whole library when compatible with snowpack

export const flashcardState = Recoil.atom({
  key: "website-cards",
  default: [
    {
      subject: "Dog",
      description: "Woof",
    },
    {
      subject: "Cat",
      description: "Meow",
    },
    {
      subject: "Cow",
      description: "Moo"
    }
  ]
});