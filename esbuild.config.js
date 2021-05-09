const esbuild = require("esbuild");
const chokidar = require("chokidar");
const liveserver = require("live-server");

const isProduction = process.env.NODE_ENV === "production";

(async () => {
  const build = await esbuild.build({
    entryPoints: ["src/index.jsx"],
    logLevel: "info",
    bundle: true,
    outfile: "public/out.js",
    sourcemap: "inline",
    minify: isProduction,
    incremental: !isProduction,
    loader: {
      ".js": "jsx",
      ".png": "dataurl",
      ".svg": "dataurl",
    },
    plugins: [],
  });
  chokidar
    .watch("src/**/*.{tsx,ts,js,jsx,css}", { interval: 0 })
    .on("all", () => {
      build.rebuild();
    });

  liveserver.start({
    port: process.env.PORT || 3000,
    root: "public",
  });
})();
