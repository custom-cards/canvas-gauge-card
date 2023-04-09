import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default [
  {
    input: "src/canvas-gauge-card.ts",
    output: {
      dir: "dist",
      format: "es",
    },

    plugins: [nodeResolve({}), commonjs(), typescript(), json(), babel({
      exclude: "node_modules/**",
    })],
  },
];