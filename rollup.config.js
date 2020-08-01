import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      typescript: require("typescript"),
    }),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};
