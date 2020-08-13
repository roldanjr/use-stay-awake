import typescript from "rollup-plugin-typescript2";
import copy from "rollup-plugin-copy-assets";
import pkg from "./package.json";

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
    copy({
      assets: ["src/assets"],
    }),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};
