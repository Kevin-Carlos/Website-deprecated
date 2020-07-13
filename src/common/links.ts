export const links = {
  home: () => `/`,
  linkedIn: () => `https://www.linkedin.com/in/kevin-carlos/`,
  projects: () => ({
    root: () => `/projects`,
    project: () => ({
      flashcards: () => `/projects/flashcards`,
    }),
  })
}