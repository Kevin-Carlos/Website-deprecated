module.exports = {
  baseUrl: "./src",
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-webpack",
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    treeshake: true,
  },
  devOptions: {
    open: "chrome",
  },
  buildOptions: {
    clean: true,
    sourceMaps: true,
    baseUrl: "/Website",
  },
  proxy: {
    /* ... */
  },
  alias: {
    common: "./src/common",
    state: "./src/state",
  },
};
