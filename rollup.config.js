import typescript from "rollup-plugin-typescript2";
import url from "@rollup/plugin-url";
import pkg from "./package.json";

// TODO: try to make the bundle size much smaller using babel

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: "esm",
      sourcemap: true,
      exports: "default",
    },
  ],
  plugins: [
    typescript({
      typescript: require("typescript"),
    }),
    url({
      include: ["**/*.mp4", "**/*.webm"],
      limit: "819200",
    }),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};
